import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeSkillFields } from '.';
import { Content } from '@/components/contentful/markdown';
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
