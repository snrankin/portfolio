import { Entry, ResourceLink } from 'contentful';
import { get, isEmpty } from 'lodash';
import React, { cloneElement, isValidElement, ReactNode } from 'react';

import { getIconString, hasIcon } from '@/components/icons/icons';
import { TypeAssetFields } from '@/lib/types';
import {
	documentToReactComponents,
	Options,
} from '@contentful/rich-text-react-renderer';
import {
	Block,
	BLOCKS,
	Document,
	helpers,
	Inline,
	INLINES,
	Mark,
	MARKS,
	Text,
} from '@contentful/rich-text-types';

import ContentfulImage from './contentful-image';

type TextLinks = {
	entries: TextEntries;
	assets: TextAssets;
	resources: TextResources;
};

type TextEntries = {
	inline: [Entry];
	hyperlink: [Entry];
	block: [Entry];
};

type TextAssets = {
	hyperlink: [TypeAssetFields];
	block: [TypeAssetFields];
};

type TextResources = {
	block: [ResourceLink];
	inline: [ResourceLink];
	hyperlink: [ResourceLink];
};

export interface AssetLink {
	block: TypeAssetFields[];
}

export interface Content {
	json: Document;
	links: TextLinks;
}

type CommonNode = Text | Block | Inline;

function nodeListToReactComponents(
	nodes: CommonNode[],
	options: Options
): ReactNode {
	return nodes.map((node: CommonNode, index: number): ReactNode => {
		return appendKeyToValidElement(
			nodeToReactComponent(node, options),
			index
		);
	});
}

function appendKeyToValidElement(element: ReactNode, key: number): ReactNode {
	if (isValidElement(element) && element.key === null) {
		return cloneElement(element, { key });
	}
	return element;
}
function nodeToReactComponent(node: CommonNode, options: Options): ReactNode {
	const { renderNode, renderMark, renderText, preserveWhitespace } = options;

	if (helpers.isText(node)) {
		let nodeValue: ReactNode = renderText
			? renderText(node.value)
			: node.value;

		if (preserveWhitespace) {
			// Preserve multiple spaces.
			nodeValue = (nodeValue as string).replace(/ {2,}/g, (match) =>
				'&nbsp;'.repeat(match.length)
			);

			// Preserve line breaks.
			let lines = (nodeValue as string).split('\n');
			let jsxLines: (string | JSX.Element)[] = [];
			lines.forEach((line, index) => {
				jsxLines.push(line);
				if (index !== lines.length - 1) {
					jsxLines.push(<br />);
				}
			});
			nodeValue = jsxLines;
		}

		return node.marks.reduce((value: ReactNode, mark: Mark): ReactNode => {
			if (!!renderMark) {
				if (!renderMark[mark.type]) {
					return value;
				}
				return renderMark[mark.type](value);
			}
		}, nodeValue);
	} else {
		const children: ReactNode = nodeListToReactComponents(
			node.content,
			options
		);
		if (!!renderNode) {
			if (!node.nodeType || !renderNode[node.nodeType]) {
				return <>{children}</>;
			}
			return renderNode[node.nodeType](node, children);
		}
	}
}
function RichTextAsset({
	id,
	assets,
}: {
	id: string;
	assets: TypeAssetFields[] | undefined;
}) {
	const asset = assets?.find((asset: TypeAssetFields) => asset.sys.id === id);

	if (asset) {
		let alt = get(asset, 'description', ''),
			width = get(asset, 'width', 300),
			height = get(asset, 'height', 300),
			src = get(asset, 'url', '');

		if (isEmpty(alt)) {
			alt = get(asset, 'title', '');
		}
		return (
			<ContentfulImage
				className="w-full"
				sizes="100vw"
				loading="lazy"
				style={{
					width: '100%',
					height: 'auto',
				}}
				alt={alt}
				width={width}
				height={height}
				src={src}
			/>
		);
	}

	return null;
}

function ExternalHyperlink(node: {
	content: { nodeType: string; data: { uri: string }; content: CommonNode[] };
}) {
	return (
		<a
			href={node.content.data.uri}
			rel="nofollow noopener noreferrer"
			target="_blank"
			className="link "
		>
			{nodeListToReactComponents(node.content.content, markdownOptions)}
		</a>
	);
}

function RemoveLiParagraph(node: any) {
	let content = get(node, 'content.content[0].content');

	return <li>{nodeListToReactComponents(content, markdownOptions)}</li>;
}

function RemoveEmptyParagraph(node: any) {
	let content = get(node, 'content.content');
	let value = get(node, 'content.content[0].value');
	let marks = get(node, 'content.content[0].marks');
	let type = get(node, 'content.content[0].nodeType');

	if (type == 'text' && isEmpty(marks) && isEmpty(value)) {
		return null;
	}

	return <p>{nodeListToReactComponents(content, markdownOptions)}</p>;
}

function SkillHighlightItem(node: { content: string }) {
	let iconVal = `<span class="inline-flex items-baseline gap-1 skill" style="line-height: 2ex">${getIconString(
		node.content,
		'dev',
		true
	)} ${node.content}</span>`;

	return (
		<>
			{hasIcon(node.content, 'dev') ? (
				<b dangerouslySetInnerHTML={{ __html: iconVal }}></b>
			) : (
				<b>{node.content}</b>
			)}
		</>
	);
}

const markdownOptions: Options = {
	renderNode: {
		[BLOCKS.LIST_ITEM]: (node: any) => <RemoveLiParagraph content={node} />,
		[BLOCKS.PARAGRAPH]: (node: any) => (
			<RemoveEmptyParagraph content={node} />
		),
		[INLINES.HYPERLINK]: (node: any) => (
			<ExternalHyperlink content={node} />
		),
	},

	renderMark: {
		[MARKS.BOLD]: (node: any) => <SkillHighlightItem content={node} />,
	},
};

export function Markdown({ content }: { content: Content }) {
	return documentToReactComponents(content.json, {
		...markdownOptions,
		renderNode: {
			[BLOCKS.LIST_ITEM]: (node: any) => (
				<RemoveLiParagraph content={node} />
			),
			[BLOCKS.PARAGRAPH]: (node: any) => (
				<RemoveEmptyParagraph content={node} />
			),
			[INLINES.HYPERLINK]: (node: any) => (
				<ExternalHyperlink content={node} />
			),
			[BLOCKS.EMBEDDED_ASSET]: (node: any) => (
				<RichTextAsset
					id={node.data.target.sys.id}
					assets={content.links.assets.block}
				/>
			),
		},
		renderMark: {
			[MARKS.BOLD]: (node: any) => <SkillHighlightItem content={node} />,
		},
	});
}
