'use client';
import React, {
	useState,
	useRef,
	useEffect,
	createContext,
	useLayoutEffect,
} from 'react';
import Link from 'next/link';
import Section from '@/components/section/section';
import SocialLinks, { getSocialLinks } from '@/components/social/group';
import ProjectsGroup from '@/components/projects/list';
import SkillsList from '@/components/skills/skills';
import Timeline from '@/components/timeline/print-group';
import Icon from '@/components/icons/icon-item';
import Logo from '@/components/global/logo';
import IconLink from '@/components/icons/link';
import { lowerCase, paramCase } from 'change-case-all';
import LogoFull from '@/img/logo-full.svg';
import { NOBREAK } from '@/lib/symbols';
import styles from './print.module.css';
import {
	TypeAuthorFields,
	TypeSkillsSectionFields,
	sortSkills,
	SkillsGroups,
	TypeJobsSectionFields,
	TypePostFields,
} from '@/lib/types';

import fitty from 'fitty';
export default function Content({
	summary,
	me,
	skills,
	projects,
	jobs,
}: {
	summary?: string;
	me?: TypeAuthorFields;
	skills?: TypeSkillsSectionFields;
	projects?: TypePostFields[];
	jobs?: TypeJobsSectionFields;
}) {
	var printClick = () => {
		window.print();
	};

	const header = useRef(null);

	// useLayoutEffect(() => {
	// 	fitty('.logo-line-1');
	// });

	const links = getSocialLinks(me);

	return (
		<Section id="resume" className={styles.print}>
			<div className="print:hidden flex flex-wrap gap-4 justify-center pb-14">
				<button onClick={printClick} className="btn btn-primary">
					<Icon
						icon="printer"
						title="Print My Resume"
						titleDisplay="inline"
					/>
				</button>
				<Link href="/" className="btn btn-secondary">
					<Icon
						icon="home"
						title="Go Back Home"
						titleDisplay="inline"
					/>
				</Link>
			</div>
			<div className="overflow-hidden">
				<div className="prose-print max-w-none grid grid-cols-1 md:grid-cols-12 print:grid-cols-12">
					<div className="border-b md:border-r print:border-r md:col-span-8 print:col-span-8 pr-[0.25in] py-[0.25in] md:pt-0">
						<h1 className="pb-4">
							<span className="sr-only">
								{!!me?.firstName && !!me?.lastName && (
									<>
										{me.firstName}
										{NOBREAK}
										{me.lastName}
									</>
								)}
							</span>
							<Link
								href="/"
								className="block md:max-w-[60%] print:max-w-[60%]"
							>
								<LogoFull className="w-full block" />
							</Link>
						</h1>
						{!!summary && (
							<p className="m-0 tracking-[-0.009em]">{summary}</p>
						)}
					</div>
					<div className="border-b md:col-span-4 print:col-span-4 md:pl-[0.23in] print:pl-[0.23in] py-[0.25in] md:pt-0">
						<div className="flex flex-col gap-3">
							{links.map((link, k) => {
								return (
									<IconLink
										iconClasses="stroke-2 text-black"
										displayUrl={true}
										titleDisplay="inline"
										icon={`${link.icon}`}
										title={`${link.title}`}
										href={`${link.href}`}
										target="_blank"
										key={k}
										className="primary-link no-underline"
									/>
								);
							})}
						</div>
					</div>
					{!!skills && (
						<div className="border-b md:border-r print:border-r md:col-span-8 print:col-span-8 py-[0.25in]">
							<h2 className="font-bold">Skillset</h2>

							<SkillsList
								className="grid grid-cols-1 gap-4"
								skills={skills?.skillsCollection?.items}
								groupProps={{
									className: 'p-0',
									showGroupTitle: true,
									bodyClasses: '!p-0 gap-0',
									groupClasses:
										'flex flex-wrap items-center gap-3 h-[18pt] overflow-hidden',
									skillProps: {
										titleDisplay: 'inline',
										className: 'h-[18pt] ',
										colored: true,
									},
									titleClasses: '!m-0 text-base',
								}}
							/>
						</div>
					)}
					{!!projects && (
						<div className="border-b md:col-span-4 print:col-span-4 py-[0.25in] md:pl-[0.25in] print:pl-[0.25in]">
							<h2 className="font-bold">Projects</h2>
							<ProjectsGroup
								className="grid grid-cols-2 md:grid-cols-1 print:grid-cols-1 gap-4 justify-between"
								projects={projects}
							/>
						</div>
					)}
					<div className="col-span-full py-[0.25in]">
						<h2 className="font-bold">Work History</h2>
						<Timeline jobs={jobs?.jobsCollection?.items} />
					</div>
				</div>
			</div>
		</Section>
	);
}
