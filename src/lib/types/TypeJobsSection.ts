import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeJobFields } from './TypeJob';
import { Content } from '@/components/contentful/markdown';
import { RICHTEXT_GRAPHQL_FIELDS, JOB_GRAPHQL_FIELDS } from '.';
export const JOBS_SECTION_GRAPHQL_FIELDS = `
  sys {
  id
  }
  __typename
  title
  slug
  command
  argument
  flags
  intro {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  jobsCollection (where: { startDate_exists: true }, order: startDate_DESC) {
	  items {
	    ${JOB_GRAPHQL_FIELDS}
	  }
  }
`;
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
