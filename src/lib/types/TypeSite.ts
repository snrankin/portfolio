import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import { RICHTEXT_GRAPHQL_FIELDS, ASSET_GRAPHQL_FIELDS } from '.';
import type { TypeAuthorFields } from '.';

export const SITE_GRAPHQL_FIELDS = `
  title
  slug
  author {
    name
    firstName
    lastName
    slug
    label
    phone
    email
    socialCollection {
      items {
        url
        title
      }
    }
  }
  navLinks
  seoTitle
`;

export const PROJECTS_SITEMAP_GRAPHQL_FIELDS = `
  projectsCollection {
      items {
        sys {
          publishedAt
          firstPublishedAt
        }
        slug
        title
      }
    }
`;

export interface NavLink {
	title: string;
	url: string;
	submenu?: NavLink[];
}

export interface TypeSitemapFields {
	title: EntryFields.Symbol;
	slug?: EntryFields.Symbol;
	sys: {
		publishedAt: string;
		firstPublishedAt: string;
	};
}

export interface TypeSiteFields {
	title: EntryFields.Symbol;
	slug?: EntryFields.Symbol;
	seoTitle?: EntryFields.Symbol;
	navLinks?: NavLink[];
	url?: EntryFields.Symbol;
	author?: TypeAuthorFields;
	projectsCollection?: {
		items: [
			{
				title: EntryFields.Symbol;
				slug?: EntryFields.Symbol;
				sys: {
					publishedAt: string;
					firstPublishedAt: string;
				};
			}
		];
	};
}

export interface TypeSiteFields {
	title: EntryFields.Symbol;
	slug?: EntryFields.Symbol;
	seoTitle?: EntryFields.Symbol;
	navLinks?: NavLink[];
	url?: EntryFields.Symbol;
	author?: TypeAuthorFields;
}

export interface Site extends EntrySkeletonType {
	fields: TypeSiteFields;
}

export type TypeSite = Entry<Site>;
