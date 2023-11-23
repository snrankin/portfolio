import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeAssetFields } from '.';
import { Content } from '@/components/contentful/markdown';
import { RICHTEXT_GRAPHQL_FIELDS, ASSET_GRAPHQL_FIELDS } from '.';
export const ABOUT_SECTION_GRAPHQL_FIELDS = `
  sys {
  id
  }
  __typename
  title
  slug
  command
  argument
  flags
  content {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  image {
    ${ASSET_GRAPHQL_FIELDS}
  }
`;
export interface TypeAboutSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: Content;
	image?: TypeAssetFields;
	content?: Content;
}

export interface AboutSection extends EntrySkeletonType {
	fields: TypeAboutSectionFields;
}

export type TypeAboutSection = Entry<AboutSection>;
