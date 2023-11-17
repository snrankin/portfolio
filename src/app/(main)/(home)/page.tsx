import { draftMode } from 'next/headers';

import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import WorkHistory from './work-history';
import { getItem } from '@/lib/api';
import {
	TypeAuthorFields,
	TypeHomePageFields,
	TypeAboutSectionFields,
	TypeJobsSectionFields,
	TypeProjectsSectionFields,
	TypeSkillsSectionFields,
} from '@/lib/types';
import { getAuthor, IAuthor } from '@/lib/api/authors';
import { getAllProjects } from '@/lib/api/projects';
import { getAllJobs } from '@/lib/api/jobs';
import { getAllSkills } from '@/lib/api/skills';
export default async function Page() {
	const { isEnabled } = draftMode();
	// const me = await getAuthor('Sam Rankin', isEnabled);
	// const projects = await getAllProjects(isEnabled);
	// const jobs = await getAllJobs(isEnabled);

	const page = await getItem<TypeHomePageFields>(
		isEnabled,
		'homePage',
		'home'
	);
	const me = await getItem<TypeAuthorFields>(
		isEnabled,
		'author',
		'sam-rankin'
	);
	const about = await getItem<TypeAboutSectionFields>(
		isEnabled,
		'aboutSection',
		'about'
	);

	const skills = await getItem<TypeSkillsSectionFields>(
		isEnabled,
		'skillsSection',
		'skills'
	);

	const projects = await getItem<TypeProjectsSectionFields>(
		isEnabled,
		'projectsSection',
		'projects'
	);

	console.log('🚀 ~ file: page.tsx:55 ~ Page ~ projects:', projects);

	const jobs = await getItem<TypeJobsSectionFields>(
		isEnabled,
		'jobsSection',
		'work-history'
	);

	// console.log(
	// 	'🚀 ~ file: page.tsx:24 ~ Page ~ page:',
	// 	JSON.stringify(page, undefined, 4)
	// );

	return (
		<>
			<Hero me={me} home={page} />
			{!!about && <About {...about} />}
			{!!skills && <Skills {...skills} />}
			{!!projects && <Projects {...projects} />}
			{!!jobs && <WorkHistory {...jobs} />}
		</>
	);
}
