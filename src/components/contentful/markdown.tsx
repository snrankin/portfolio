import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { isEmpty } from 'lodash';
import { hasIcon, getIconString } from '@/components/icons/icons';
import Icon from '@/components/icons/icon-item';
export interface Asset {
	sys: {
		id: string;
	};
	url: string;
	description: string;
	width?: number;
	height?: number;
	title: string;
}

export interface AssetLink {
	block: Asset[];
}

export interface Content {
	json: any;
	links: {
		assets: AssetLink;
	};
}

function RichTextAsset({
	id,
	assets,
}: {
	id: string;
	assets: Asset[] | undefined;
}) {
	const asset = assets?.find((asset: Asset) => asset.sys.id === id);

	if (asset?.url) {
		let alt = !isEmpty(asset.description) ? asset.description : asset.title;
		return (
			<Image
				className="w-full"
				sizes="100vw"
				loading="lazy"
				style={{
					width: '100%',
					height: 'auto',
				}}
				alt={alt}
				width={asset.width}
				height={asset.height}
				src={asset.url}
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
