import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeSkillFields {
	title: EntryFields.Symbol;
	category: 'CMS' | 'Frameworks' | 'Languages' | 'Software' | 'Tools';
}
export interface Skill extends EntrySkeletonType {
	fields: TypeSkillFields;
}
export type TypeSkill = Entry<Skill>;
