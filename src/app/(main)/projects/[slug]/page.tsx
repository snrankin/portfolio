import { draftMode } from 'next/headers';
import Content from './content';
import {
	getAllProjects,
	getProject,
	getProjectsExcept,
	preloadProject,
} from '@/lib/api/projects';

export async function generateStaticParams() {
	const allProjects = await getAllProjects(false);

	// console.log(
	// 	'🚀 ~ file: page.tsx:8 ~ generateStaticParams ~ allProjects:',
	// 	allProjects
	// );

	return allProjects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { isEnabled } = draftMode();
	preloadProject(params.slug);
	let project = await getProject(params.slug, isEnabled);
	const moreProjects = await getProjectsExcept(params.slug, isEnabled, 3);

	return <Content project={project} moreProjects={moreProjects} />;
}
