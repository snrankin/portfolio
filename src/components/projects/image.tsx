import ContentfulImage from '@/components/contentful/contentful-image';
import Grid from '@/components/device/grid';
import { TypePostFields } from '@/lib/types';
import { deviceImageHeight, simplifyUrl } from '@/lib/utils';

export default function ProjectImage(props?: TypePostFields) {
	let useGrid =
		!!props?.desktopPreview ||
		!!props?.mobilePreview ||
		!!props?.tabletPreview ||
		!!props?.laptopPreview;

	let useImage =
		props?.featuredImage != undefined &&
		props?.desktopPreview == undefined &&
		props?.laptopPreview == undefined &&
		props?.mobilePreview == undefined &&
		props?.tabletPreview == undefined;

	let featured =
		props?.featuredImage == undefined &&
		props?.desktopPreview != undefined &&
		props?.laptopPreview == undefined &&
		props?.mobilePreview == undefined &&
		props?.tabletPreview == undefined;

	return (
		<>
			{useGrid && (
				<Grid desktopOnly={featured}>
					{!!props?.desktopPreview && (
						<Grid.Desktop
							url={simplifyUrl(props.website)}
							desktopOnly={featured}
						>
							<ContentfulImage
								className="w-full"
								priority
								width={600}
								height={deviceImageHeight(600, 'desktop')}
								alt={`${props.desktopPreview.description}`}
								src={props.desktopPreview.url}
							/>
						</Grid.Desktop>
					)}
					{!!props?.laptopPreview && (
						<Grid.Laptop url={simplifyUrl(props.website)}>
							<ContentfulImage
								className="w-full"
								priority
								width={300}
								height={deviceImageHeight(300, 'laptop')}
								alt={`${props.laptopPreview.description}`}
								src={props.laptopPreview.url}
							/>
						</Grid.Laptop>
					)}
					{!!props?.tabletPreview && (
						<Grid.Tablet url={simplifyUrl(props.website)}>
							<ContentfulImage
								className="w-full"
								priority
								width={150}
								height={deviceImageHeight(150, 'tablet')}
								alt={`${props.tabletPreview.description}`}
								src={props.tabletPreview.url}
							/>
						</Grid.Tablet>
					)}
					{!!props?.mobilePreview && (
						<Grid.Mobile url={simplifyUrl(props.website)}>
							<ContentfulImage
								className="w-full"
								priority
								width={80}
								height={deviceImageHeight(80, 'mobile')}
								alt={`${props.mobilePreview.description}`}
								src={props.mobilePreview.url}
							/>
						</Grid.Mobile>
					)}
				</Grid>
			)}
			{useImage && !!props?.featuredImage && (
				<div>
					<ContentfulImage
						alt={`Mobile view of ${props.shortTitle}`}
						className="w-full"
						sizes="100vw"
						priority
						style={{
							width: '100%',
							height: 'auto',
						}}
						src={props.featuredImage.url}
					/>
				</div>
			)}
		</>
	);
}
