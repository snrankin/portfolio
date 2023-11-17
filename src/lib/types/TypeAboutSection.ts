import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeAssetFields } from '.';
import { Content } from '@/components/contentful/markdown';
export interface TypeAboutSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: Content;
	image?: TypeAssetFields;
	content?: Content;
}

export interface AboutSection extends EntrySkeletonType {
	fields: TypeAboutSectionFields;
}

export type TypeAboutSection = Entry<AboutSection>;
