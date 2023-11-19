import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Content from './content';
import { getItem, getItems, getItemsExcept } from '@/lib/api';
import {
	TypeJobsSectionFields,
	TypeSkillsSectionFields,
	TypeResumePageFields,
} from '@/lib/types';
import './page.css';
export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
	title: 'Resume',
	description: 'Portfolio for Phoenix, AZ Based Web Developer',
};
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
	return (
		<Content
			summary={page?.summary}
			projects={page?.projectsCollection?.items}
			jobs={jobs}
			skills={skills}
			me={page?.author}
		/>
	);
}
