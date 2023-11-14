import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeAuthor } from './TypeAuthor';
import type { TypeSkill } from './TypeSkill';

export interface TypePostFields {
	title: EntryFields.Symbol;
	shortTitle?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	featuredImage?: Asset;
	summary?: EntryFields.Text;
	excerpt?: EntryFields.Symbol;
	content?: EntryFields.RichText;
	startDate?: EntryFields.Date;
	endDate?: EntryFields.Date;
	author: TypeAuthor;
	desktopPreview?: Asset;
	laptopPreview?: Asset;
	tabletPreview?: Asset;
	mobilePreview?: Asset;
	website?: EntryFields.Symbol;
	repo?: EntryFields.Symbol;
	skill?: TypeSkill[];
	seoTitle?: EntryFields.Symbol;
	seoDescription?: EntryFields.Text;
	seoImage?: Asset;
}

export interface Post extends EntrySkeletonType {
	fields: TypePostFields;
}

export type TypePost = Entry<Post>;
