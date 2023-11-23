import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypePostCardFields } from './TypePost';
import { Content } from '@/components/contentful/markdown';
import { RICHTEXT_GRAPHQL_FIELDS, POST_CARD_GRAPHQL_FIELDS } from '.';
export const PROJECTS_SECTION_GRAPHQL_FIELDS = `
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
  projectsCollection {
	  items {
	    ${POST_CARD_GRAPHQL_FIELDS}
	  }
  }
`;
export interface TypeProjectsSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: Content;
	projectsCollection?: {
		items: TypePostCardFields[];
	};
}

export interface ProjectsSection extends EntrySkeletonType {
	fields: TypeProjectsSectionFields;
}

export type TypeProjectsSection = Entry<ProjectsSection>;
