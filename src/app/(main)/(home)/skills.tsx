'use client';
import React from 'react';
import Section from '@/components/section/section';
import SkillsList from '@/components/skills/skills';
import { TypeSkillsSectionFields } from '@/lib/types';
export default function Skills(props?: TypeSkillsSectionFields): JSX.Element {
	let skills = props?.skillsCollection?.items;

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
				skills={skills}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 xl:gap-11 text-center"
				langClass="shadow lg:col-span-4 text-neutral-950 bg-primary-500 dark:bg-primary-600"
				cmsClass="shadow lg:col-span-4 text-neutral-100 bg-accent-500 dark:bg-accent-600"
				frameClass="shadow lg:col-span-4 text-neutral-950 bg-secondary-500 dark:bg-secondary-600"
				toolClass="shadow lg:col-span-6 text-neutral-950 bg-warning-500 dark:bg-warning-600"
				softClass="shadow md:col-span-2 lg:col-span-6 text-neutral-950 bg-success-500 dark:bg-success-600"
				groupProps={{
					compact: true,
					showGroupTitle: true,
					bodyClasses: 'items-center text-center',
					groupClasses:
						'text-2xl flex justify-center flex-wrap items-center gap-3',
					skillProps: { titleDisplay: 'popover' },
				}}
			/>
		</Section>
	);
}
