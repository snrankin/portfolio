'use client';
import { IProject } from '@/app/lib/interfaces';
import Section from '@/app/components/section/section';
import DeviceTabs from '@/app/components/device/tabs';
import Grid from '@/app/components/device/grid';
import { paramCase } from 'change-case-all';
import Icon from '@/app/components/icons/icon-item';
import classNames from 'classnames';
import Image from 'next/image';
import { titleCase } from 'change-case-all';
import { simplifyUrl } from '../../lib/utils';

import { ProjectLinks } from '@/app/components/projects/card';
export default function Content(props: {
	project: IProject;
	useTabs?: boolean;
	useGrid?: boolean;
}) {
	let { project } = props;
	let useTabs =
		(project.desktop != undefined ||
			project.mobile != undefined ||
			project.tablet != undefined ||
			project.laptop != undefined) &&
		props.useTabs;

	let useGrid =
		(project.desktop != undefined ||
			project.mobile != undefined ||
			project.tablet != undefined ||
			project.laptop != undefined) &&
		props.useGrid;

	let useImage =
		project.image != undefined &&
		project.desktop == undefined &&
		project.mobile == undefined &&
		project.tablet == undefined;

	let wrapperClasses = classNames('grid', 'grid-cols-1', 'gap-section', {
		'lg:grid-cols-2': useTabs || useImage || useGrid,
	});
	return (
		<>
			{project != undefined && (
				<>
					<Section className="overflow-hidden">
						<div className={wrapperClasses}>
							{(useTabs || useImage || useGrid) && (
								<div>
									<div className="md:w-full-pg drop-shadow-lg lg:-ml-pg">
										{useGrid && (
											<Grid>
												{!!project.desktop && (
													<Grid.Desktop
														url={simplifyUrl(
															project.url
														)}
													>
														<Image
															src={
																project.desktop
															}
															alt={`Desktop view of ${project.title}`}
															className="w-full"
															sizes="100vw"
															loading="lazy"
															style={{
																width: '100%',
																height: 'auto',
															}}
														/>
													</Grid.Desktop>
												)}
												{!!project.laptop && (
													<Grid.Laptop
														url={simplifyUrl(
															project.url
														)}
													>
														<Image
															src={project.laptop}
															alt={`Laptop view of ${project.title}`}
															className="w-full"
															sizes="100vw"
															loading="lazy"
															style={{
																width: '100%',
																height: 'auto',
															}}
														/>
													</Grid.Laptop>
												)}
												{!!project.tablet && (
													<Grid.Tablet
														url={simplifyUrl(
															project.url
														)}
													>
														<Image
															src={project.tablet}
															alt={`Tablet view of ${project.title}`}
															className="w-full"
															sizes="100vw"
															loading="lazy"
															style={{
																width: '100%',
																height: 'auto',
															}}
														/>
													</Grid.Tablet>
												)}
												{!!project.mobile && (
													<Grid.Mobile
														url={simplifyUrl(
															project.url
														)}
													>
														<Image
															src={project.mobile}
															alt={`Mobile view of ${project.title}`}
															className="w-full"
															sizes="100vw"
															loading="lazy"
															style={{
																width: '100%',
																height: 'auto',
															}}
														/>
													</Grid.Mobile>
												)}
											</Grid>
										)}
										{useTabs && <DeviceTabs {...project} />}
										{useImage && !!project.image && (
											<div>
												<Image
													src={project.image}
													alt={`Tablet view of `}
													className="w-full"
													sizes="100vw"
													loading="lazy"
													style={{
														width: '100%',
														height: 'auto',
													}}
												/>
											</div>
										)}
									</div>
								</div>
							)}
							<div className="text-center prose lg:prose-xl md:text-left">
								<div className="prose">
									<h1>{project.title}</h1>
									<ProjectLinks project={project} />

									{project.highlights != undefined ? (
										<ul className="flex list-none gap-3 !p-0 flex-wrap">
											{project.highlights?.map((h, i) => {
												return (
													<li
														key={i}
														className="badge gap-1"
													>
														<Icon
															icon={h}
															group="dev"
															title={h}
															titleDisplay="inline"
														/>
													</li>
												);
											})}
										</ul>
									) : null}

									{!!project.summary && (
										<p>{project.summary}</p>
									)}
								</div>
							</div>
						</div>
					</Section>

					<Section
						title="Featured Projects"
						command="ls"
						argument="project"
						flags={`id=${project.slug}|verbose`}
						className="bg-base-200"
					>
						<div className="text-center prose lg:prose-xl md:text-left mx-auto">
							<div className="prose">
								<p>
									Reiciendis cum sunt labore dolore ut
									occaecati voluptatem. Adipisci
									exercitationem commodi id fugiat ea.
									Corporis rerum rerum vero. Aliquid totam
									culpa dolorem doloremque aut. Sint
									laudantium asperiores temporibus et.{' '}
								</p>

								<p>
									Architecto autem est dignissimos omnis aut
									eveniet quia ut veniam est impedit quos sed.
									Quasi blanditiis impedit tempore voluptates.
									Velit provident commodi ipsum et id
									explicabo. Doloremque numquam aspernatur et
									sit sit minima similique. Et dolorum aliquid
									cum quasi hic eveniet sint sequi. Rerum
									sequi et perferendis quia.{' '}
								</p>

								<p>
									Cum excepturi harum veniam voluptas ab
									placeat saepe tenetur non sed eum pariatur
									dolor qui. Illo consectetur tempore debitis
									cum explicabo soluta incidunt molestiae
									nobis. Impedit incidunt neque commodi
									excepturi sed cumque ut corrupti omnis vel
									ab iure sunt. Ab maxime est unde ut
									consequatur inventore reprehenderit qui
									voluptatem et. Reprehenderit aspernatur unde
									et et et velit debitis et dolore iusto
									voluptas atque nesciunt consequatur. Dolore
									odit maxime eligendi qui rem recusandae
									explicabo sed optio blanditiis. Id ut quis
									magni magni est consequatur. Hic a quis
									officiis.
								</p>
							</div>
						</div>
					</Section>
				</>
			)}
		</>
	);
}
