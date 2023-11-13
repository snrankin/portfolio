'use client';
import { IProject } from '@/lib/api/projects';
import Section from '@/components/section/section';
import Grid from '@/components/device/grid';
import { simplifyUrl } from '@/lib/utils';
import ContentfulImage from '@/components/contentful/contentful-image';
import classNames from 'classnames';
import { Markdown } from '@/components/contentful/markdown';
import MoreProjects from '@/app/(main)/projects/[slug]/more-projects';
import Skill from '@/components/skills/item';
export default function Content({
	project,
	moreProjects,
}: {
	project: IProject;
	moreProjects: IProject[];
}) {
	let useGrid =
		!!project.desktopPreview ||
		!!project.mobilePreview ||
		!!project.tabletPreview ||
		!!project.laptopPreview;

	let useImage =
		project.featuredImage != undefined &&
		project.desktopPreview == undefined &&
		project.laptopPreview == undefined &&
		project.mobilePreview == undefined &&
		project.tabletPreview == undefined;

	let wrapperClasses = classNames('grid', 'grid-cols-1', 'gap-section', {
		'lg:grid-cols-2': useImage || useGrid,
	});

	return (
		<>
			<Section className="overflow-hidden">
				<div className={wrapperClasses}>
					{(useImage || useGrid) && (
						<div>
							<div className="md:w-full-pg drop-shadow-lg lg:-ml-pg">
								{useGrid && (
									<Grid>
										{!!project.desktopPreview && (
											<Grid.Desktop
												url={simplifyUrl(
													project.website
												)}
											>
												<ContentfulImage
													alt={`Desktop view of ${project.shortTitle}`}
													className="w-full"
													sizes="100vw"
													loading="lazy"
													style={{
														width: '100%',
														height: 'auto',
													}}
													src={
														project.desktopPreview
															.url
													}
												/>
											</Grid.Desktop>
										)}
										{!!project.laptopPreview && (
											<Grid.Laptop
												url={simplifyUrl(
													project.website
												)}
											>
												<ContentfulImage
													alt={`Laptop view of ${project.shortTitle}`}
													className="w-full"
													sizes="100vw"
													loading="lazy"
													style={{
														width: '100%',
														height: 'auto',
													}}
													src={
														project.laptopPreview
															.url
													}
												/>
											</Grid.Laptop>
										)}
										{!!project.tabletPreview && (
											<Grid.Tablet
												url={simplifyUrl(
													project.website
												)}
											>
												<ContentfulImage
													alt={`Tablet view of ${project.shortTitle}`}
													className="w-full"
													sizes="100vw"
													loading="lazy"
													style={{
														width: '100%',
														height: 'auto',
													}}
													src={
														project.tabletPreview
															.url
													}
												/>
											</Grid.Tablet>
										)}
										{!!project.mobilePreview && (
											<Grid.Mobile
												url={simplifyUrl(
													project.website
												)}
											>
												<ContentfulImage
													alt={`Mobile view of ${project.shortTitle}`}
													className="w-full"
													sizes="100vw"
													loading="lazy"
													style={{
														width: '100%',
														height: 'auto',
													}}
													src={
														project.mobilePreview
															.url
													}
												/>
											</Grid.Mobile>
										)}
									</Grid>
								)}
								{useImage && !!project.featuredImage && (
									<div>
										<ContentfulImage
											alt={`Mobile view of ${project.shortTitle}`}
											className="w-full"
											sizes="100vw"
											loading="lazy"
											style={{
												width: '100%',
												height: 'auto',
											}}
											src={project.featuredImage.url}
										/>
									</div>
								)}
							</div>
						</div>
					)}
					<div className="text-center prose lg:prose-xl md:text-left">
						<div className="prose">
							<h1>{project.title}</h1>
							{!!project.skillCollection && (
								<ul className="flex list-none gap-3 !p-0 flex-wrap">
									{project.skillCollection.items?.map(
										(s, i) => {
											return (
												<li
													key={i}
													className="badge gap-1"
												>
													<Skill icon={s.title} />
												</li>
											);
										}
									)}
								</ul>
							)}
							{!!project.excerpt && <p>{project.excerpt}</p>}
						</div>
					</div>
				</div>
			</Section>

			{!!project.content && (
				<Section
					title="Featured Projects"
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

			<Section
				title="More Projects"
				command="ls"
				argument="projects"
				flags={`exclude=${project.slug}`}
				className="bg-base-200"
			>
				<div className="grid gap-6 lg:gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					<MoreProjects moreProjects={moreProjects} />
				</div>
			</Section>
		</>
	);
}
