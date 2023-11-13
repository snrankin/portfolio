'use client';
import React, { useState, HTMLProps } from 'react';
import Section from '@/components/section/section';
import SkillsGroup from '@/components/skills/group';
import { ISkills } from '@/lib/api/skills';
export default function Skills({
	skills,
	intro,
}: {
	skills: ISkills;
	intro?: string;
}): JSX.Element {
	return (
		<Section
			id="skills"
			title="My Skillset"
			command="ls"
			argument="skills"
			flags="featured"
			className="bg-base-200"
			intro={intro}
		>
			<div className="text-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 xl:gap-11">
					<SkillsGroup
						className="shadow lg:col-span-4"
						compact={true}
						showGroupTitle={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group={skills.Languages}
						groupName="Languages"
						skillProps={{ titleDisplay: 'popover' }}
					/>
					<SkillsGroup
						className="shadow lg:col-span-4"
						compact={true}
						showGroupTitle={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group={skills.CMS}
						groupName="CMS"
						skillProps={{ titleDisplay: 'popover' }}
					/>
					<SkillsGroup
						className="shadow lg:col-span-4"
						showGroupTitle={true}
						compact={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group={skills.Frameworks}
						groupName="Frameworks"
						skillProps={{ titleDisplay: 'popover' }}
					/>
					<SkillsGroup
						className="shadow lg:col-span-6"
						showGroupTitle={true}
						compact={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group={skills.Tools}
						groupName="Tools"
						skillProps={{ titleDisplay: 'popover' }}
					/>
					<SkillsGroup
						className="shadow md:col-span-2 lg:col-span-6"
						showGroupTitle={true}
						compact={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group={skills.Software}
						groupName="Software"
						skillProps={{ titleDisplay: 'popover' }}
					/>
				</div>
			</div>
		</Section>
	);
}
