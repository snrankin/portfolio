'use client';

import { omit, set } from 'lodash';
import React from 'react';
import Card, { CardProps } from '../card/card';
import Link from 'next/link';
import ProjectSkills from './skills';
import { TypePostCardFields } from '@/lib/types';
import { paramCase } from 'change-case-all';
export interface ProjectCardProps
	extends Omit<CardProps, 'content'>,
		TypePostCardFields {}

export default function ProjectCard(props: ProjectCardProps) {
	let { summary, skillCollection } = props;

	let attr: Omit<CardProps, 'content'> = omit(props, [
		'slug',
		'shortTitle',
		'summary',
		'desktopPreview',
		'laptopPreview',
		'tabletPreview',
		'mobilePreview',
		'content',
		'skillCollection',
	]);

	let title = props.title != undefined ? props.title : '';

	let displayTitle = props.shortTitle != undefined ? props.shortTitle : title;

	set(attr, 'title', displayTitle);

	let slug = props.slug != undefined ? props.slug : paramCase(displayTitle);

	return (
		<Card {...attr}>
			<div className="flex gap-2 flex-wrap">
				<ProjectSkills skillCollection={skillCollection} limit={4} />
			</div>
			{!!summary && <p>{summary}</p>}
			<div className="card-actions justify-end">
				<Link href={`/projects/${slug}`} className="btn btn-link">
					View More
				</Link>
			</div>
		</Card>
	);
}
