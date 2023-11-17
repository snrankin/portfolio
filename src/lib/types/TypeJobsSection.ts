import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeJobFields } from './TypeJob';
import { Content } from '@/components/contentful/markdown';
export interface TypeJobsSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: Content;
	jobsCollection?: {
		items: TypeJobFields[];
	};
}
export interface JobsSection extends EntrySkeletonType {
	fields: TypeJobsSectionFields;
}
export type TypeJobsSection = Entry<JobsSection>;
