import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeAuthorFields } from './TypeAuthor';
import type { TypePostFields } from './TypePost';

export interface TypeResumePageFields {
	title?: EntryFields.Symbol;
	author?: TypeAuthorFields;
	projectsCollection?: {
		items: TypePostFields[];
	};
	seoTitle?: EntryFields.Symbol;
	summary?: EntryFields.Text;
	seoDescription?: EntryFields.Text;
	seoImage?: Asset;
}
export interface ResumePage extends EntrySkeletonType {
	fields: TypeResumePageFields;
}
export type TypeResumePage = Entry<ResumePage>;
