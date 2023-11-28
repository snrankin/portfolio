import { AssetDetails, AssetFields as FileFields, AssetFile } from 'contentful';

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
