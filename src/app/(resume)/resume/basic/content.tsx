'use client';
import dayjs from 'dayjs';
import { filter } from 'lodash';
import Link from 'next/link';
import React, { useRef } from 'react';

import Address from '@/components/global/address';
import Icon from '@/components/icons/icon-item';
import Section from '@/components/section/section';
import SocialLinks, { getSocialLinks } from '@/components/social/group';
import Timeline from '@/components/timeline/print-basic-group';
import { TimelineItemProps } from '@/components/timeline/print-basic-item';
import { NOBREAK } from '@/lib/symbols';
import {
	TypeAuthorFields,
	TypeEducationFields,
	TypeJobsSectionFields,
	TypeSkillsSectionFields,
	TypeVolunteerFields,
} from '@/lib/types';

import styles from '../print.module.css';
import basicStyles from './print-basic.module.css';

export default function Content({
	label,
	summary,
	me,
	skills,
	volunteer,
	education,
	jobs,
}: {
	label?: string;
	summary?: string;
	me?: TypeAuthorFields;
	skills?: TypeSkillsSectionFields;
	volunteer?: TypeVolunteerFields[];
	education?: TypeEducationFields[];
	jobs?: TypeJobsSectionFields;
}) {
	var printClick = () => {
		window.print();
	};

	const header = useRef(null);

	// useLayoutEffect(() => {
	// 	fitty('.logo-line-1');
	// });

	let links = getSocialLinks(me);

	let contactLinks = (links = filter(
		links,
		(l) => l.icon == 'mail' || l.icon == 'phone'
	));

	links = filter(links, (l) => l.href.includes('linkedin'));

	links.push({
		title: 'Portfolio Site',
		href: 'https://www.samrankin.dev',
		icon: 'web',
	});

	let jobsList = jobs?.jobsCollection?.items;
	let jobsArr: TimelineItemProps[] = [];
	let oldJobsArr: TimelineItemProps[] = [];

	if (jobsList != undefined) {
		jobsList.forEach((j) => {
			let startDate = parseInt(dayjs(j.startDate).format('YYYY'));

			// if (startDate >= 2014) {
			// 	jobsArr.push({
			// 		title: j.title,
			// 		subtitle: j.company,
			// 		isCurrent: j.current,
			// 		startDate: j.startDate,
			// 		endDate: j.endDate,
			// 		description: j.description,
			// 	});
			// } else {
			// 	oldJobsArr.push({
			// 		title: j.title,
			// 		subtitle: j.company,
			// 		isCurrent: j.current,
			// 		startDate: j.startDate,
			// 		endDate: j.endDate,
			// 	});
			// }

			jobsArr.push({
				title: j.title,
				subtitle: j.company,
				isCurrent: j.current,
				startDate: j.startDate,
				endDate: j.endDate,
				description: j.description,
			});
		});
	}

	let volunteerArr: TimelineItemProps[] = [];

	if (volunteer != undefined) {
		volunteer.forEach((j) => {
			volunteerArr.push({
				title: j.organization,
				subtitle: j.role,
				isCurrent: j.current,
				startDate: j.startDate,
				endDate: j.endDate,
			});
		});
	}

	let educationArr: TimelineItemProps[] = [];

	if (education != undefined) {
		education.forEach((j) => {
			educationArr.push({
				title: j.school,
				subtitle: `${j.degree} ${j.field}`,
				isCurrent: j.current,
				startDate: j.startDate,
				endDate: j.endDate,
			});
		});
	}

	return (
		<Section id="resume-basic" className={styles.print}>
			<div className="print:hidden">
				<div className=" flex flex-wrap gap-4 justify-center pb-14">
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
			</div>
			<div className="overflow-hidden">
				<div className="print:prose-basic prose-print prose  max-w-none grid grid-cols-1">
					<div className="border-b dark:border-slate-500 print:!border-neutral-200 pb-[0.25in] md:pt-0 text-center">
						<h1 className="!mb-1 print:!text-primary-600">
							{!!me?.firstName && !!me?.lastName && (
								<>
									{me.firstName}
									{NOBREAK}
									{me.lastName}
								</>
							)}
						</h1>
						{!!label && <p className="lead !mb-4">{label}</p>}
						<div className="text-center">
							<Address
								street={me?.loc?.street}
								city={me?.loc?.city}
								state={me?.loc?.state}
								postal={me?.loc?.postal}
							/>
						</div>
						<div className="flex justify-center items-center mt-2 divide-x">
							{me?.email && (
								<a
									href={`mailto:${me?.email}`}
									target="_blank"
									className="primary-link no-underline px-2 block leading-none"
								>
									{me?.email}
								</a>
							)}
							{me?.phone && (
								<a
									href={`tel:${me?.phone}`}
									target="_blank"
									className="primary-link no-underline px-2 text-left block leading-none"
								>
									{me?.phone}
								</a>
							)}
							<a
								href="https://samrankin.dev"
								className="primary-link no-underline px-2 block leading-none"
							>
								www.samrankin.dev
							</a>
							<a
								href="https://linkedin/in/snrankin"
								className="primary-link no-underline px-2 block leading-none"
							>
								www.linkedin/in/snrankin
							</a>
						</div>
						{/* {!!summary && <p className="m-0">{summary}</p>} */}
					</div>
					{!!skills && (
						<div className="border-b dark:border-slate-500 print:!border-neutral-200 md:col-span-8 print:col-span-8 py-[0.25in]">
							<h2 className="text-center print:!text-primary-600">
								Skills
							</h2>
							<ul className="skills list-none  flex flex-wrap justify-center items-center gap-y-[0.375em] list-inside !p-0">
								{skills?.skillsCollection?.items.map((s, i) => {
									return (
										<li
											className="first:before:content-none before:content-['\2022'] before:text-secondary-600 before:mr-[0.375em] inline-flex items-center leading-none m-0"
											key={i}
										>
											{s.title}
										</li>
									);
								})}
							</ul>
						</div>
					)}
					{!!jobs && (
						<div
							id="experience"
							className={`border-b dark:border-slate-500 print:!border-neutral-200 col-span-full py-[0.25in] ${basicStyles.skillItem}`}
						>
							<h2 className="text-center print:!text-primary-600">
								Experience
							</h2>
							<Timeline items={jobsArr} />
						</div>
					)}
					{/* {!!jobs && (
						<div
							id="prev-experience"
							className={`border-b dark:border-slate-500 col-span-full py-[0.25in] ${basicStyles.skillItem}`}
						>
							<h2>Previous Experience</h2>
							<Timeline items={oldJobsArr} />
						</div>
					)} */}

					{!!volunteer && (
						<div
							id="volunteer"
							className={`border-b dark:border-slate-500 print:!border-neutral-200 col-span-full py-[0.25in] ${basicStyles.skillItem}`}
						>
							<h2 className="text-center print:!text-primary-600">
								Volunteer
							</h2>
							<Timeline items={volunteerArr} />
						</div>
					)}
					{!!education && (
						<div
							id="education"
							className={`col-span-full py-[0.25in] ${basicStyles.skillItem}`}
						>
							<h2 className="text-center print:!text-primary-600">
								Education
							</h2>
							<Timeline items={educationArr} />
						</div>
					)}
				</div>
			</div>
		</Section>
	);
}
