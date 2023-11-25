import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import { Content } from '@/components/contentful/markdown';
import { RICHTEXT_GRAPHQL_FIELDS, ASSET_GRAPHQL_FIELDS } from '.';
export const JOB_GRAPHQL_FIELDS = `
  title
  company
  startDate
  endDate
  website
  description {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
`;
export interface TypeJobFields {
	title: EntryFields.Symbol;
	company: EntryFields.Symbol;
	startDate: string;
	endDate?: string;
	website?: EntryFields.Symbol;
	description?: Content;
}
export interface Job extends EntrySkeletonType {
	fields: TypeJobFields;
}
export type TypeJob = Entry<Job>;
