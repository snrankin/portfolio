import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import { RICHTEXT_GRAPHQL_FIELDS, ASSET_GRAPHQL_FIELDS } from '.';
import type { TypeAuthorFields, TypePostFields } from '.';

export const RESUME_GRAPHQL_FIELDS = `
  sys {
    publishedAt
    firstPublishedAt
  }
  __typename
  title
  slug
  summary
  author {
    name
    firstName
    lastName
    slug
    label
  }
  projectsCollection {
	  items {
	    slug
	    shortTitle
	    website
      repo
	  }
  }
  seoTitle
  seoDescription
  seoImage {
    ${ASSET_GRAPHQL_FIELDS}
  }
`;

export interface TypeResumePageFields {
	title?: EntryFields.Symbol;
	author?: TypeAuthorFields;
	projectsCollection?: {
		items: TypePostFields[];
	};
	seoTitle?: EntryFields.Symbol;
	summary?: EntryFields.Text;
	seoDescription?: EntryFields.Text;
	seoImage?: Asset;
}
export interface ResumePage extends EntrySkeletonType {
	fields: TypeResumePageFields;
}
export type TypeResumePage = Entry<ResumePage>;
