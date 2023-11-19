import { AssetDetails, AssetFile, AssetFields as FileFields } from 'contentful';

export interface TypeAssetFields extends FileFields, AssetDetails, AssetFile {
	sys: {
		id: string;
	};
	width: number;
	height: number;
}
