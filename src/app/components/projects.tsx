'use client';
import React, { useState } from 'react';
import { paramCase } from 'change-case-all';
import Section from './section';
import DeviceTabs from './device-tabs';
import Image from 'next/image';
import { getIcon } from '../lib/utils';
import {
	StaticImageData,
	StaticImport,
} from 'next/dist/shared/lib/get-img-props';

import LAZooDesktop from '@/img/lazoo-desktop.png';
import LAZooTablet from '@/img/lazoo-tablet.png';
import LAZooMobile from '@/img/lazoo-mobile.png';
import Link from 'next/link';
export type Project = {
	name: string;
	slug: string;
	startDate?: string | Date;
	endDate?: string | Date;
	summary?: string;
	url?: string;
	repo?: string;
	image?: StaticImport | string;
	highlights?: string[];
	desktop?: StaticImport | string;
	tablet?: StaticImport | string;
	mobile?: StaticImport | string;
};

export type ProjectListType = {
	[key: string]: Project;
};

export const ProjectList: ProjectListType = {
	lazoo: {
		name: 'LA Zoo Website Redesign',
		slug: 'lazoo',
		startDate: '2020-02-28',
		endDate: '2021-03-31',
		summary:
			'Complete redesign of the LA Zoo website. Built using Sage 9 Laravel Wordpress theme, Advanced Custom Fields and custom Gutenberg blocks',
		url: 'https://www.lazoo.org/',
		image: LAZooDesktop,
		highlights: ['WordPress', 'Laravel', 'PHP', 'React', 'Webpack'],
		desktop: LAZooDesktop,
		tablet: LAZooTablet,
		mobile: LAZooMobile,
	},
	'wp-readme': {
		name: 'WP ReadMe Generator',
		slug: 'lazoo',
		startDate: '2020-02-28',
		endDate: '2021-03-31',
		summary:
			'Complete redesign of the LA Zoo website. Built using Sage 9 Laravel Wordpress theme, Advanced Custom Fields and custom Gutenberg blocks',
		repo: 'https://github.com/snrankin/generate-wp-readme',
		url: 'https://www.npmjs.com/package/@snrankin/generate-wp-readme',
		highlights: ['TypeScript', 'NodeJS', 'WordPress', 'JavaScript'],
		desktop: LAZooDesktop,
		tablet: LAZooTablet,
		mobile: LAZooMobile,
	},
};
export default function Projects(): JSX.Element {
	return (
		<Section
			id="projects"
			title="Featured Projects"
			command="ls"
			argument="projects"
			flags="featured"
			className="bg-base-200"
		>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{Object.values(ProjectList).map((project: Project, slug) => {
					return (
						<div
							key={slug}
							className="card card-compact bg-base-100 shadow"
						>
							<div className="card-body">
								<h3 className="card-title">{project.name}</h3>
								<p>{project.summary}</p>
								{project.highlights != undefined ? (
									<ul className="inline-flex list-none gap-3 p-0 flex-wrap">
										{project.highlights?.map((h, i) => {
											return (
												<li
													key={i}
													className="badge gap-1"
												>
													{getIcon(h)}
													{h}
												</li>
											);
										})}
									</ul>
								) : null}

								<div className="card-actions justify-end">
									<Link
										href={`/projects/${slug}`}
										className="btn btn-link"
									>
										View More
									</Link>
									{project.repo != undefined ? (
										<a
											href={project.repo}
											target="_blank"
											className="btn btn-link"
										>
											View Repo
										</a>
									) : null}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
}
