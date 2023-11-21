'use client';
import React, { useContext } from 'react';
import { TypePostLinkFields } from '@/lib/types';
import Link from 'next/link';
import { SectionContext } from '@/lib/context/section';
import classNames from 'classnames';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Nav from '@/components/nav/nav';
import NavButton from '@/components/nav/nav-button';
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
		'font-display',
		'flex',
		'items-center'
	);

	let aboutClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'about',
	});
	let skillsClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'skills',
	});
	let projectsClasses = classNames(
		topLevelClasses,
		'flex',
		'items-center',
		'justify-between',
		{
			active:
				(pathname == '/' && sectionCtx.section == 'projects') ||
				pathname.includes('projects'),
		}
	);

	let workClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'work-history',
	});

	let resumeClasses = classNames(topLevelClasses, {
		active: sectionCtx.section == 'resume',
	});

	return (
		<>
			<li role="none" data-te-nav-item-ref>
				<Link
					role="menuitem"
					className={aboutClasses}
					href="/#about"
					data-te-nav-link-ref
				>
					About
				</Link>
			</li>
			<li role="none" data-te-nav-item-ref>
				<Link
					role="menuitem"
					className={skillsClasses}
					href="/#skills"
					data-te-nav-link-ref
				>
					Skills
				</Link>
			</li>
			<li role="none" data-te-nav-item-ref>
				<span className={projectsClasses}>
					<Link
						role="menuitem"
						href="/#projects"
						data-te-nav-link-ref
					>
						Projects
					</Link>
					<NavButton
						className="btn btn-ghost p-1 min-w-0 min-h-0"
						target="projects-dropdown"
					>
						<span className="sr-only">Projects Menu Toggle</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5 block"
						>
							<path
								fillRule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</NavButton>
				</span>
				{!!projects && (
					<Nav
						id="projects-dropdown"
						dropdown={true}
						className="md:absolute md:top-full md:-left-2 p-0"
						menuClasses="rounded-b-lg bg-base-100 dark:bg-base-950 p-2  md:shadow ms-0 border-none before:content-none"
					>
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
											data-te-dropdown-item-ref
										>
											{shortTitle}
										</Link>
									</li>
								);
							}
						)}
					</Nav>
				)}
			</li>
			<li role="none" data-te-nav-item-ref>
				<Link
					role="menuitem"
					className={workClasses}
					href="/#work-history"
					data-te-nav-link-ref
				>
					Work History
				</Link>
			</li>
			<li role="none" data-te-nav-item-ref>
				<Link
					role="menuitem"
					className={resumeClasses}
					href="/resume"
					data-te-nav-link-ref
				>
					Resume
				</Link>
			</li>
		</>
	);
}
