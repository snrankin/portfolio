import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeJob } from './TypeJob';

export interface TypeJobsSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: EntryFields.RichText;
	jobs?: TypeJob[];
}
export interface JobsSection extends EntrySkeletonType {
	fields: TypeJobsSectionFields;
}
export type TypeJobsSection = Entry<JobsSection>;
