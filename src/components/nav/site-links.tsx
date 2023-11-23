'use client';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { TypePostLinkFields } from '@/lib/types';
import Link from 'next/link';
import { SectionContext } from '@/lib/context/section';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Nav from '@/components/nav/nav';
import ProjectsNav from './projects-nav';

export default function SiteLinks({
	projects,
}: {
	projects?: TypePostLinkFields[];
}) {
	const pathname = usePathname();

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
			<li role="none">
				<Link role="menuitem" className={aboutClasses} href="/#about">
					About
				</Link>
			</li>
			<li role="none">
				<Link role="menuitem" className={skillsClasses} href="/#skills">
					Skills
				</Link>
			</li>
			<ProjectsNav projects={projects} projectClasses={projectsClasses} />
			<li role="none">
				<Link
					role="menuitem"
					className={workClasses}
					href="/#work-history"
				>
					Work History
				</Link>
			</li>
			<li role="none">
				<Link role="menuitem" className={resumeClasses} href="/resume">
					Resume
				</Link>
			</li>
		</>
	);
}
