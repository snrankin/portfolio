'use client';

import Section from '@/components/section/section';
import classNames from 'classnames';
import { Markdown } from '@/components/contentful/markdown';
import ProjectsGroup from '@/components/projects/grid';
import { TypePostFields, TypePostCardFields } from '@/lib/types';
import Hero from './hero';
export default function Content({
	project,
	moreProjects,
}: {
	project?: TypePostFields;
	moreProjects?: TypePostCardFields[];
}) {
	let useGrid =
		!!project?.desktopPreview ||
		!!project?.mobilePreview ||
		!!project?.tabletPreview ||
		!!project?.laptopPreview;

	let useImage =
		project?.featuredImage != undefined &&
		project?.desktopPreview == undefined &&
		project?.laptopPreview == undefined &&
		project?.mobilePreview == undefined &&
		project?.tabletPreview == undefined;

	let wrapperClasses = classNames('grid', 'grid-cols-1', 'gap-section', {
		'lg:grid-cols-2': useImage || useGrid,
	});

	return (
		<>
			{!!project && <Hero {...project} />}

			{!!project?.content && (
				<Section
					id="project-content"
					title={`Case Study: ${project.title}`}
					command="ls"
					argument="project"
					flags={`id=${project.slug}|verbose`}
				>
					<div className="dark:prose-invert prose lg:prose-xl mx-auto">
						<Markdown content={project.content} />
					</div>
				</Section>
			)}
			{!!moreProjects && (
				<Section
					id="more-projects"
					title="More Projects"
					command="ls"
					argument="projects"
					flags={`exclude=${project?.slug}`}
					className="bg-base-200"
				>
					<ProjectsGroup
						projectProps={{
							compact: true,
							className: 'bg-base-100 shadow',
						}}
						projects={moreProjects}
						className="grid gap-6 lg:gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
					/>
				</Section>
			)}
		</>
	);
}
