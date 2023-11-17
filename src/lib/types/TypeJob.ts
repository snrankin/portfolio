import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import { Content } from '@/components/contentful/markdown';
export interface TypeJobFields {
	title: EntryFields.Symbol;
	company: EntryFields.Symbol;
	startDate: EntryFields.Date;
	endDate?: EntryFields.Date;
	website?: EntryFields.Symbol;
	description?: Content;
}
export interface Job extends EntrySkeletonType {
	fields: TypeJobFields;
}
export type TypeJob = Entry<Job>;
