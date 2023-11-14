import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeAboutSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: EntryFields.RichText;
	image?: Asset;
	content?: EntryFields.RichText;
}

export interface AboutSection extends EntrySkeletonType {
	fields: TypeAboutSectionFields;
}

export type TypeAboutSection = Entry<AboutSection>;
