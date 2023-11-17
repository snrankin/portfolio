'use client';
import { IProject } from '@/lib/api/projects';
import Section from '@/components/section/section';
import Grid from '@/components/device/grid';
import { simplifyUrl } from '@/lib/utils';
import ContentfulImage from '@/components/contentful/contentful-image';
import classNames from 'classnames';
import { Markdown } from '@/components/contentful/markdown';
import Skill from '@/components/skills/item';
import ProjectImage from '@/components/projects/image';
import ProjectsGroup from '@/components/projects/grid';
import ProjectLinks from '@/components/projects/links';
import { TypePostFields, TypePostCardFields } from '@/lib/types';
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
			<Section id="projects" className="overflow-hidden">
				<div className={wrapperClasses}>
					{(useImage || useGrid) && (
						<div>
							<div className="md:w-full-pg drop-shadow-lg lg:-ml-pg">
								<ProjectImage {...project} />
							</div>
						</div>
					)}
					<div className="text-center prose lg:prose-xl md:text-left">
						<div className="prose">
							<h1>{project?.title}</h1>
							{!!project?.skillCollection && (
								<ul className="flex list-none gap-3 !p-0 flex-wrap">
									{project?.skillCollection.items?.map(
										(s, i) => {
											return (
												<li
													key={i}
													className="badge gap-1 !m-0"
												>
													<Skill
														icon={s.title}
														titleDisplay="inline"
													/>
												</li>
											);
										}
									)}
								</ul>
							)}
							{!!project?.summary && (
								<p className="lead">{project?.summary}</p>
							)}
							<ProjectLinks
								repo={project?.repo}
								website={project?.website}
							/>
						</div>
					</div>
				</div>
			</Section>

			{!!project?.content && (
				<Section
					id="project-content"
					title={`Case Study: ${project.title}`}
					command="ls"
					argument="project"
					flags={`id=${project.slug}|verbose`}
					className="bg-base-200"
				>
					<div className="text-center prose lg:prose-xl md:text-left mx-auto">
						<div className="prose">
							<Markdown content={project.content} />
						</div>
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
