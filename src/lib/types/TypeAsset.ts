import { AssetDetails, AssetFile, AssetFields as FileFields } from 'contentful';

export interface TypeAssetFields extends FileFields, AssetDetails, AssetFile {
	sys: {
		id: string;
	};
	width: number;
	height: number;
}

export const RICHTEXT_GRAPHQL_FIELDS = `
json
links {
  assets {
    block {
      sys {
        id
      }
      title
      url
      description
      width
      height
    }
  }
}
`;

export const ASSET_GRAPHQL_FIELDS = `
  title
  url(transform: {
    format: WEBP,
    quality: 90
  })
description
width
height
`;

export const desktopRatio = 0.565400859375;
export const laptopRatio = 0.644636625;
export const tabletRatio = 0.10888671875;
export const mobileRatio = 0.2137404833333;

export function deviceImageHeight(
	width: number,
	device: 'desktop' | 'laptop' | 'tablet' | 'mobile'
) {
	let height;

	switch (device) {
		case 'desktop':
			height = width * desktopRatio;
			break;

		case 'laptop':
			height = width * laptopRatio;
			break;
		case 'tablet':
			height = width * tabletRatio;
			break;
		case 'mobile':
			height = width * mobileRatio;
			break;
	}

	return Math.ceil(height);
}

function deviceImage(
	width: number,
	device: 'desktop' | 'laptop' | 'tablet' | 'mobile'
) {
	let height = deviceImageHeight(width, device);

	return `
  width: ${width},
  height: ${Math.ceil(height)},
  resizeStrategy: FILL,
  resizeFocus: TOP,
`;
}
