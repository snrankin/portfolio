'use client';
import React, { useContext, HTMLProps } from 'react';
import { IProject } from '@/lib/api/projects';
import Link from 'next/link';
import { SectionContext } from '@/lib/context/section';
import classNames from 'classnames';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
export default function SiteLinks({ projects }: { projects?: IProject[] }) {
	const pathname = usePathname();
	const segment = useSelectedLayoutSegment();
	const sectionCtx: {
		section: string;
		updateSectionHandler: (str: string) => void;
	} = useContext(SectionContext);

	let topLevelClasses = classNames(
		'whitespace-nowrap',
		'font-bold',
		'font-display',
		'hover:dark:bg-gray-950'
	);

	let aboutClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'about',
		'bg-gray-200': sectionCtx.section == 'about',
		'dark:bg-gray-950': sectionCtx.section == 'about',
	});
	let skillsClasses = classNames(topLevelClasses, {
		'bg-gray-200': sectionCtx.section == 'skills',
		'dark:bg-gray-950': sectionCtx.section == 'skills',
	});
	let projectsClasses = classNames(topLevelClasses, {
		'bg-gray-200':
			(pathname == '/' && sectionCtx.section == 'projects') ||
			pathname.includes('projects'),
		'dark:bg-gray-950':
			(pathname == '/' && sectionCtx.section == 'projects') ||
			pathname.includes('projects'),
	});

	let workClasses = classNames(topLevelClasses, {
		'bg-gray-200': sectionCtx.section == 'work-history',
		'dark:bg-gray-950': sectionCtx.section == 'work-history',
	});

	let resumeClasses = classNames(topLevelClasses, {
		'bg-gray-200': sectionCtx.section == 'resume',
		'dark:bg-gray-950': sectionCtx.section == 'resume',
	});

	return (
		<>
			<li role="none" data-section="about">
				<Link
					role="menuitem"
					className={aboutClasses}
					href="/#about"
					scroll={false}
				>
					About
				</Link>
			</li>
			<li role="none" data-section="skills">
				<Link
					role="menuitem"
					className={skillsClasses}
					href="/#skills"
					scroll={false}
				>
					Skills
				</Link>
			</li>
			<li role="none" data-section="projects">
				<details>
					<summary className={projectsClasses}>
						<Link role="menuitem" href="/#projects" scroll={false}>
							Projects
						</Link>
					</summary>
					{!!projects && (
						<ul className="menu rounded-box bg-base-100 dark:bg-gray-950 md:p-3 md:shadow ms-0 border-none before:content-none">
							{projects.map(({ shortTitle, slug }: IProject) => {
								const isActive = slug === segment;
								let subClasses = classNames(
									'whitespace-nowrap',
									'hover:dark:bg-primary-600',
									'hover:dark:text-gray-950',

									{
										active: isActive,
										'bg-primary-500':
											!!slug && pathname.includes(slug),
										'dark:bg-primary-600':
											!!slug && pathname.includes(slug),
										'dark:text-gray-950':
											!!slug && pathname.includes(slug),
									}
								);

								return (
									<li key={slug}>
										<Link
											role="menuitem"
											className={subClasses}
											href={`/projects/${slug}`}
										>
											{shortTitle}
										</Link>
									</li>
								);
							})}
						</ul>
					)}
				</details>
			</li>
			<li role="none" data-section="work-history">
				<Link
					role="menuitem"
					className={workClasses}
					href="/#work-history"
					scroll={false}
				>
					Work History
				</Link>
			</li>
			<li role="none" data-section="resume">
				<Link role="menuitem" className={resumeClasses} href="/resume">
					Resume
				</Link>
			</li>
		</>
	);
}
