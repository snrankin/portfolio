import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypePost } from './TypePost';

export interface TypeProjectsSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: EntryFields.RichText;
	projects?: TypePost;
}

export interface ProjectsSection extends EntrySkeletonType {
	fields: TypeProjectsSectionFields;
}

export type TypeProjectsSection = Entry<ProjectsSection>;
