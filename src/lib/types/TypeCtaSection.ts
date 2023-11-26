import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

import { Content } from '@/components/contentful/markdown';

import { RICHTEXT_GRAPHQL_FIELDS } from './';

export const CTA_SECTION_GRAPHQL_FIELDS = `
  title
  slug
  content {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  links
`;

export interface CtaLink {
	title: string;
	href: string;
	target?: string;
	icon?: string;
	group?: 'web' | 'dev' | 'ios' | 'feather';
}

export interface TypeCtaSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	content?: Content;
	links?: CtaLink[];
}

export interface CtaSection extends EntrySkeletonType {
	fields: TypeCtaSectionFields;
}

export type TypeCtaSection = Entry<CtaSection>;
