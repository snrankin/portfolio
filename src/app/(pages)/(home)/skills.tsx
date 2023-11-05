'use client';
import React, { useState, HTMLProps } from 'react';
import Section from '@/app/components/section/section';
import SkillsGroup from '@/app/components/skills/group';

export default function Skills(): JSX.Element {
	return (
		<Section
			id="skills"
			title="My Skillset"
			command="ls"
			argument="skills"
			flags="featured"
			className="bg-base-200"
			intro="Alright, let's get into the good stuff. Here's what I bring to the table. These are the tools I wield, the languages I speak, and the skills I've polished over time."
		>
			<div className="text-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-11 pt-11">
					<SkillsGroup
						className="shadow lg:col-span-4"
						border={true}
						showGroupTitle={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group="languages"
						skillProps={{ titleDisplay: 'popover' }}
					/>
					<SkillsGroup
						className="shadow lg:col-span-4"
						border={true}
						showGroupTitle={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group="cms"
						skillProps={{ titleDisplay: 'popover' }}
					/>
					<SkillsGroup
						className="shadow lg:col-span-4"
						border={true}
						showGroupTitle={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group="frameworks"
						skillProps={{ titleDisplay: 'popover' }}
					/>
					<SkillsGroup
						className="shadow lg:col-span-6"
						border={true}
						showGroupTitle={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group="tools"
						skillProps={{ titleDisplay: 'popover' }}
					/>
					<SkillsGroup
						className="shadow lg:col-span-6"
						border={true}
						showGroupTitle={true}
						bodyClasses="items-center text-center"
						groupClasses="text-4xl flex justify-center flex-wrap items-center gap-3"
						group="software"
						skillProps={{ titleDisplay: 'popover' }}
					/>
				</div>
			</div>
		</Section>
	);
}
