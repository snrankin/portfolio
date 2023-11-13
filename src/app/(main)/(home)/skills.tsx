'use client';
import React, { useState, HTMLProps } from 'react';
import Section from '@/components/section/section';
import SkillsGroup from '@/components/skills/group';
import SkillsList from '@/components/skills/skills';
import { ISkills } from '@/lib/api/skills';
export default function Skills({
	skills,
	intro,
}: {
	skills?: ISkills;
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
			<SkillsList
				skills={skills}
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
