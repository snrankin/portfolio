import Image from 'next/image';
import ContentfulImage from './contentful-image';
import { Entry, ResourceLink } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES, Document } from '@contentful/rich-text-types';
import { isEmpty, get } from 'lodash';
import { hasIcon, getIconString } from '@/components/icons/icons';
import { TypeAssetFields } from '@/lib/types';
import Icon from '@/components/icons/icon-item';

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

function EntryHyperlink({
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

function SkillHighlightItem(node: { content: string }) {
	let iconVal = `<span class="inline-flex items-baseline gap-1" style="line-height: 2ex">${getIconString(
		node.content,
		'dev'
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

export function Markdown({ content }: { content: Content }) {
	return documentToReactComponents(content.json, {
		renderNode: {
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
