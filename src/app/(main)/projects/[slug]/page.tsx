import { draftMode } from 'next/headers';
import Content from './content';
import { getAllProjects, getProjectAndMoreProjects } from '@/lib/api/projects';

export async function generateStaticParams() {
	const allProjects = await getAllProjects(false);

	return allProjects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { isEnabled } = draftMode();
	const { project, moreProjects } = await getProjectAndMoreProjects(
		params.slug,
		isEnabled
	);

	return <Content project={project} moreProjects={moreProjects} />;
}
