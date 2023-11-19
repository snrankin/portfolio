'use client';
import React, { useContext } from 'react';
import { TypePostLinkFields } from '@/lib/types';
import Link from 'next/link';
import { SectionContext } from '@/lib/context/section';
import classNames from 'classnames';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
export default function SiteLinks({
	projects,
}: {
	projects?: TypePostLinkFields[];
}) {
	const pathname = usePathname();
	const segment = useSelectedLayoutSegment();
	const sectionCtx: {
		section: string;
		updateSectionHandler: (str: string) => void;
	} = useContext(SectionContext);

	let topLevelClasses = classNames(
		'whitespace-nowrap',
		'font-bold',
		'font-display'
	);

	let aboutClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'about',
	});
	let skillsClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'skills',
	});
	let projectsClasses = classNames(topLevelClasses, {
		active:
			(pathname == '/' && sectionCtx.section == 'projects') ||
			pathname.includes('projects'),
	});

	let workClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'work-history',
	});

	let resumeClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'resume',
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
						<Link role="menuitem" href="/#projects">
							Projects
						</Link>
					</summary>
					{!!projects && (
						<ul className="menu rounded-box bg-base-100 dark:bg-neutral-950 md:p-3 md:shadow ms-0 border-none before:content-none">
							{projects.map(
								({ shortTitle, slug }: TypePostLinkFields) => {
									const isActive = slug === segment;
									let subClasses = classNames(
										'whitespace-nowrap',

										{
											active: isActive,
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
								}
							)}
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
