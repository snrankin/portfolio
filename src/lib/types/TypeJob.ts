import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeJobFields {
	title: EntryFields.Symbol;
	company: EntryFields.Symbol;
	startDate: EntryFields.Date;
	endDate?: EntryFields.Date;
	website?: EntryFields.Symbol;
	description?: EntryFields.RichText;
}
export interface Job extends EntrySkeletonType {
	fields: TypeJobFields;
}
export type TypeJob = Entry<Job>;
