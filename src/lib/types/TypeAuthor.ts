import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeSocialProfile } from './TypeSocialProfile';

export interface TypeAuthorFields {
	name: EntryFields.Symbol;
	picture: Asset;
	firstName?: EntryFields.Symbol;
	lastName?: EntryFields.Symbol;
	label?: EntryFields.Symbol;
	email?: EntryFields.Symbol;
	phone?: EntryFields.Symbol;
	location?: EntryFields.Location;
	social?: TypeSocialProfile[];
}

export interface Author extends EntrySkeletonType {
	fields: TypeAuthorFields;
}

export type TypeAuthor = Entry<Author>;
