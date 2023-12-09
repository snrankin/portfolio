import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import { ASSET_GRAPHQL_FIELDS } from './';

import type { TypeAuthorFields, TypePostFields, TypeAssetFields } from '.';

export const RESUME_GRAPHQL_FIELDS = `
  sys {
    publishedAt
    firstPublishedAt
  }
  __typename
  title
  slug
  label
  summary
  author {
    name
    firstName
    lastName
    slug
    label
    phone
    email
    loc {
      street
      city
      state
      postal
    }
    socialCollection {
      items {
        url
        title
      }
    }
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
	label?: EntryFields.Symbol;
	author?: TypeAuthorFields;
	projectsCollection?: {
		items: TypePostFields[];
	};
	seoTitle?: EntryFields.Symbol;
	summary?: EntryFields.Text;
	seoDescription?: EntryFields.Text;
	seoImage?: TypeAssetFields;
}
export interface ResumePage extends EntrySkeletonType {
	fields: TypeResumePageFields;
}
export type TypeResumePage = Entry<ResumePage>;
