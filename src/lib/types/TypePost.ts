import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import { Content } from '@/components/contentful/markdown';
import type {
	TypeAuthor,
	TypeSkill,
	TypeAssetFields,
	TypeSkillFields,
} from '.';
export interface TypePostFields {
	title: EntryFields.Symbol;
	shortTitle?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	featuredImage?: TypeAssetFields;
	summary?: EntryFields.Text;
	excerpt?: EntryFields.Symbol;
	content?: Content;
	startDate?: EntryFields.Date;
	endDate?: EntryFields.Date;
	author: TypeAuthor;
	desktopPreview?: TypeAssetFields;
	laptopPreview?: TypeAssetFields;
	tabletPreview?: TypeAssetFields;
	mobilePreview?: TypeAssetFields;
	website?: EntryFields.Symbol;
	repo?: EntryFields.Symbol;
	skillCollection?: {
		items: TypeSkillFields[];
	};
	seoTitle?: EntryFields.Symbol;
	seoDescription?: EntryFields.Text;
	seoImage?: TypeAssetFields;
}

export interface TypePostCardFields {
	shortTitle?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	summary?: EntryFields.Text;
	excerpt?: EntryFields.Symbol;
	skillCollection?: {
		items: TypeSkillFields[];
	};
}

export interface TypePostResumeFields {
	shortTitle?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	website?: EntryFields.Symbol;
	repo?: EntryFields.Symbol;
}

export interface TypePostLinkFields {
	shortTitle?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
}

export interface Post extends EntrySkeletonType {
	fields: TypePostFields;
}

export type TypePost = Entry<Post>;
