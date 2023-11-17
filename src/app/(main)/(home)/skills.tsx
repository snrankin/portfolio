'use client';
import React, { useState, HTMLProps } from 'react';
import Section from '@/components/section/section';
import SkillsGroup from '@/components/skills/group';
import SkillsList from '@/components/skills/skills';
import { TypeSkillsSectionFields, TypeSkillFields } from '@/lib/types';
import { ISkills } from '@/lib/api/skills';
export default function Skills(props?: TypeSkillsSectionFields): JSX.Element {
	let skills = props?.skillsCollection?.items;
	let skillsGroups: ISkills = {
		Languages: [],
		Frameworks: [],
		CMS: [],
		Tools: [],
		Software: [],
	};
	if (skills) {
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
	return (
		<Section
			id={`${props?.slug}`}
			title={`${props?.title}`}
			command={`${props?.command}`}
			argument={`${props?.argument}`}
			flags={props?.flags}
			intro={props?.intro}
			className="bg-base-200"
		>
			<SkillsList
				skills={skillsGroups}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 xl:gap-11 text-center"
				langClass="shadow lg:col-span-4"
				cmsClass="shadow lg:col-span-4"
				frameClass="shadow lg:col-span-4"
				toolClass="shadow lg:col-span-6"
				softClass="shadow md:col-span-2 lg:col-span-6"
				groupProps={{
					compact: true,
					showGroupTitle: true,
					bodyClasses: 'items-center text-center',
					groupClasses:
						'text-4xl flex justify-center flex-wrap items-center gap-3',
					skillProps: { titleDisplay: 'popover' },
				}}
			/>
		</Section>
	);
}
