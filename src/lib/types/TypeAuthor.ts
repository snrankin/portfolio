import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeSocialProfile, TypeAssetFields } from '.';
export interface TypeAuthorFields {
	name: EntryFields.Text;
	picture: Asset;
	firstName?: EntryFields.Text;
	lastName?: EntryFields.Text;
	label?: EntryFields.Text;
	email?: EntryFields.Text;
	phone?: EntryFields.Text;
	location?: EntryFields.Location;
	social?: TypeSocialProfile[];
}

export interface Author extends EntrySkeletonType {
	fields: TypeAuthorFields;
}

export type TypeAuthor = Entry<Author>;
