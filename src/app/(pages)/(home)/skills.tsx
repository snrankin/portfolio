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
			flags="--featured"
		>
			<div className="text-center">
				<div className="prose mx-auto">
					<h3>{`I've got a few tricks up my sleeve.`} </h3>
					<p>Here are some of my favorites</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7">
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
