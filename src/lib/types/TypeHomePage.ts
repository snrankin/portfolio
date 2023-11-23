import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import { Content } from '@/components/contentful/markdown';
import { RICHTEXT_GRAPHQL_FIELDS, ASSET_GRAPHQL_FIELDS } from '.';
import type {
	AboutSection,
	TypeAuthorFields,
	JobsSection,
	ProjectsSection,
	SkillsSection,
	TypeAssetFields,
} from '.';

export const HOMEPAGE_GRAPHQL_FIELDS = `
  sys {
    publishedAt
    firstPublishedAt
  }
  __typename
  title
  slug
  author {
    name
    firstName
    lastName
    slug
    label
  }
  heroText {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  seoTitle
  seoDescription
  seoImage {
    ${ASSET_GRAPHQL_FIELDS}
  }
`;

export interface TypeHomePageFields {
	title?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	author?: TypeAuthorFields;
	heroTitle?: EntryFields.RichText;
	heroText?: Content;
	sections?: Entry<
		AboutSection | JobsSection | ProjectsSection | SkillsSection
	>[];
	seoTitle?: EntryFields.Symbol;
	seoDescription?: EntryFields.Text;
	seoImage?: TypeAssetFields;
}
export interface HomePage extends EntrySkeletonType {
	fields: TypeHomePageFields;
}
export type TypeHomePage = Entry<HomePage>;
