import type { Metadata } from 'next';
import { draftMode } from 'next/headers';

import { getItem, getItems } from '@/lib/api';
import {
	TypeEducationFields,
	TypeJobsSectionFields,
	TypeResumePageFields,
	TypeSkillsSectionFields,
	TypeVolunteerFields,
} from '@/lib/types';

import Content from './content';

export default async function Page() {
	const { isEnabled } = draftMode();
	const page = await getItem<TypeResumePageFields>(
		isEnabled,
		'resumePage',
		'resume'
	);
	const jobs = await getItem<TypeJobsSectionFields>(
		isEnabled,
		'jobsSection',
		'work-history'
	);
	const skills = await getItem<TypeSkillsSectionFields>(
		isEnabled,
		'skillsSection',
		'skills'
	);
	const education = await getItems<TypeEducationFields>(
		isEnabled,
		'education'
	);
	const volunteer = await getItems<TypeVolunteerFields>(
		isEnabled,
		'volunteer'
	);
	return (
		<Content
			label={page?.label}
			summary={page?.summary}
			education={education}
			volunteer={volunteer}
			jobs={jobs}
			skills={skills}
			me={page?.author}
		/>
	);
}
