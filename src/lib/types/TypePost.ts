import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import { Content } from '@/components/contentful/markdown';

import { ASSET_GRAPHQL_FIELDS, RICHTEXT_GRAPHQL_FIELDS } from './';

import type {
	TypeAuthor,
	TypeSkill,
	TypeAssetFields,
	TypeSkillFields,
} from '.';

export const POST_GRAPHQL_FIELDS = `
  slug
  title
  shortTitle
  featuredImage {
    ${ASSET_GRAPHQL_FIELDS}
  }
  startDate
  endDate
  website
  repo
  desktopPreview {
    ${ASSET_GRAPHQL_FIELDS}
  }
  laptopPreview {
    ${ASSET_GRAPHQL_FIELDS}
  }
  tabletPreview {
    ${ASSET_GRAPHQL_FIELDS}
  }
  mobilePreview {
    ${ASSET_GRAPHQL_FIELDS}
  }
  summary
  content {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  skillCollection {
    items {
      title
      category
    }
  }
`;

export const POST_SEO_GRAPHQL_FIELDS = `
  sys {
    publishedAt
    firstPublishedAt
  }
  __typename
  slug
  title
  shortTitle
  summary
  seoTitle
  seoDescription
  seoImage {
    ${ASSET_GRAPHQL_FIELDS}
  }
`;

export const POST_CARD_GRAPHQL_FIELDS = `
  slug
  shortTitle
  summary
  skillCollection (limit: 4){
    items {
      title
  category
    }
  }
`;
export const POST_LINKS_GRAPHQL_FIELDS = `
  slug
  shortTitle
`;

export interface TypePostFields {
	title?: EntryFields.Symbol;
	shortTitle?: EntryFields.Symbol;
	slug?: EntryFields.Symbol;
	featuredImage?: TypeAssetFields;
	summary?: EntryFields.Text;
	excerpt?: EntryFields.Symbol;
	content?: Content;
	startDate?: EntryFields.Date;
	endDate?: EntryFields.Date;
	author?: TypeAuthor;
	desktopPreview?: TypeAssetFields;
	laptopPreview?: TypeAssetFields;
	tabletPreview?: TypeAssetFields;
	mobilePreview?: TypeAssetFields;
	website?: EntryFields.Symbol;
	repo?: EntryFields.Symbol;
	skillCollection?: {
		items: TypeSkillFields[];
	};
	seoTitle?: EntryFields.Symbol;
	seoDescription?: EntryFields.Text;
	seoImage?: TypeAssetFields;
}

export interface TypePostCardFields {
	shortTitle?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	summary?: EntryFields.Text;
	excerpt?: EntryFields.Symbol;
	skillCollection?: {
		items: TypeSkillFields[];
	};
}

export interface TypePostResumeFields {
	shortTitle?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	website?: EntryFields.Symbol;
	repo?: EntryFields.Symbol;
}

export interface TypePostLinkFields {
	shortTitle?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
}

export interface Post extends EntrySkeletonType {
	fields: TypePostFields;
}

export type TypePost = Entry<Post>;
