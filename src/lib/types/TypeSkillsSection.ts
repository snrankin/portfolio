import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeSkillFields } from '.';
import { Content } from '@/components/contentful/markdown';
import { RICHTEXT_GRAPHQL_FIELDS, SKILL_GRAPHQL_FIELDS } from '.';
export const SKILLS_SECTION_GRAPHQL_FIELDS = `
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
  skillsCollection {
	  items {
	    ${SKILL_GRAPHQL_FIELDS}
	  }
  }
`;
export interface TypeSkillsSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: Content;
	skillsCollection?: {
		items: TypeSkillFields[];
	};
}

export interface SkillsSection extends EntrySkeletonType {
	fields: TypeSkillsSectionFields;
}

export type TypeSkillsSection = Entry<SkillsSection>;
