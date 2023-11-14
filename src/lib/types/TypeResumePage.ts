import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeAuthor } from './TypeAuthor';
import type { TypePost } from './TypePost';

export interface TypeResumePageFields {
	title?: EntryFields.Symbol;
	author?: TypeAuthor;
	projects?: TypePost[];
	seoTitle?: EntryFields.Symbol;
	seoDescription?: EntryFields.Text;
	seoImage?: Asset;
}
export interface ResumePage extends EntrySkeletonType {
	fields: TypeResumePageFields;
}
export type TypeResumePage = Entry<ResumePage>;
