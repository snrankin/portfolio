import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { Skill } from './TypeSkill';

export interface TypeSkillsSectionFields {
	title: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	command?: EntryFields.Symbol;
	argument?: EntryFields.Symbol;
	flags?: EntryFields.Symbol[];
	intro?: EntryFields.RichText;
	skills?: Entry<Skill>[];
}

export interface SkillsSection extends EntrySkeletonType {
	fields: TypeSkillsSectionFields;
}

export type TypeSkillsSection = Entry<SkillsSection>;
