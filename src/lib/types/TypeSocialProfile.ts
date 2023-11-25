import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeSocialProfileFields {
	title: EntryFields.Symbol;
	url: EntryFields.Symbol;
}

export interface TypeSocialLinks {
	title: string;
	href: string;
	icon: string;
	group?: 'web' | 'dev' | 'ios' | 'feather';
}
export interface SocialProfile extends EntrySkeletonType {
	fields: TypeSocialProfileFields;
}
export type TypeSocialProfile = Entry<SocialProfile>;
