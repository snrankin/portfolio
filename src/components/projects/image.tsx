import Grid from '@/components/device/grid';
import ContentfulImage from '@/components/contentful/contentful-image';
import { simplifyUrl } from '@/lib/utils';
import { TypePostFields, deviceImageHeight } from '@/lib/types';
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
								sizes="100vw"
								loading="lazy"
								style={{
									width: '100%',
									height: 'auto',
								}}
								alt={`${props.desktopPreview.description}`}
								width={props.desktopPreview?.width}
								height={props.desktopPreview?.height}
								src={props.desktopPreview.url}
							/>
						</Grid.Desktop>
					)}
					{!!props?.laptopPreview && (
						<Grid.Laptop url={simplifyUrl(props.website)}>
							<ContentfulImage
								className="w-full"
								sizes="100vw"
								loading="lazy"
								style={{
									width: '100%',
									height: 'auto',
								}}
								alt={`${props.laptopPreview.description}`}
								width={props.laptopPreview?.width}
								height={props.laptopPreview?.height}
								src={props.laptopPreview.url}
							/>
						</Grid.Laptop>
					)}
					{!!props?.tabletPreview && (
						<Grid.Tablet url={simplifyUrl(props.website)}>
							<ContentfulImage
								className="w-full"
								sizes="100vw"
								loading="lazy"
								style={{
									width: '100%',
									height: 'auto',
								}}
								alt={`${props.tabletPreview.description}`}
								width={props.tabletPreview?.width}
								height={props.tabletPreview?.height}
								src={props.tabletPreview.url}
							/>
						</Grid.Tablet>
					)}
					{!!props?.mobilePreview && (
						<Grid.Mobile url={simplifyUrl(props.website)}>
							<ContentfulImage
								className="w-full"
								sizes="100vw"
								loading="lazy"
								style={{
									width: '100%',
									height: 'auto',
								}}
								alt={`${props.mobilePreview.description}`}
								width={props.mobilePreview?.width}
								height={props.mobilePreview?.height}
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
						loading="lazy"
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
