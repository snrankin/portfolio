import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeSkillFields {
	title: EntryFields.Symbol;
	category: 'CMS' | 'Frameworks' | 'Languages' | 'Software' | 'Tools';
}
export interface Skill extends EntrySkeletonType {
	fields: TypeSkillFields;
}
export type TypeSkill = Entry<Skill>;

export interface SkillsGroups extends Object {
	Languages: TypeSkillFields[];
	Frameworks: TypeSkillFields[];
	CMS: TypeSkillFields[];
	Tools: TypeSkillFields[];
	Software: TypeSkillFields[];
}

export function sortSkills(skills?: TypeSkillFields[]): SkillsGroups {
	let skillsGroups: SkillsGroups = {
		Languages: [],
		Frameworks: [],
		CMS: [],
		Tools: [],
		Software: [],
	};
	if (skills != undefined) {
		skills.map((skill: TypeSkillFields) => {
			switch (skill.category) {
				case 'CMS':
					skillsGroups.CMS.push(skill);
					break;
				case 'Frameworks':
					skillsGroups.Frameworks.push(skill);
					break;
				case 'Languages':
					skillsGroups.Languages.push(skill);
					break;
				case 'Tools':
					skillsGroups.Tools.push(skill);
					break;
				case 'Software':
					skillsGroups.Software.push(skill);
					break;
			}
		});
	}

	return skillsGroups;
}
