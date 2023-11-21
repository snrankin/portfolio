import { draftMode } from 'next/headers';
import Test from './test';
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
export default async function Page() {
	const { isEnabled } = draftMode();

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

	const jobs = await getItem<TypeJobsSectionFields>(
		isEnabled,
		'jobsSection',
		'work-history'
	);

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
