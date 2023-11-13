import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import Content from './content';
import {
	getAllProjects,
	getProject,
	getProjectsExcept,
	preloadProject,
} from '@/lib/api/projects';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	preloadProject(params.slug);
	const { isEnabled } = draftMode();
	let project = await getProject(params.slug, isEnabled);
	return {
		title: project.shortTitle,
		description: project.excerpt,
	};
}

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

	let project = await getProject(params.slug, isEnabled);
	const moreProjects = await getProjectsExcept(params.slug, isEnabled, 3);

	return <Content project={project} moreProjects={moreProjects} />;
}
