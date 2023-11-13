'use client';

import classNames from 'classnames';
import { isEmpty, omit, pick, pull, set } from 'lodash';
import React from 'react';
import Icon from '../icons/icon-item';
import Card, { CardProps } from '../card/card';
import { displayDate, simplifyUrl } from '@/lib/utils';
import Link from 'next/link';
import ProjectSkills from './skills';
import { IProject } from '@/lib/api/projects';
import { paramCase } from 'change-case-all';
export interface ProjectCardProps
	extends Omit<CardProps, 'content'>,
		IProject {}

export default function ProjectCard(props: ProjectCardProps) {
	let { excerpt, skillCollection } = props;

	let attr: Omit<CardProps, 'content'> = omit(props, [
		'slug',
		'shortTitle',
		'featuredImage',
		'startDate',
		'endDate',
		'excerpt',
		'website',
		'repo',
		'highlights',
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
			<ProjectSkills skillCollection={skillCollection} limit={4} />
			{excerpt != undefined ? <p>{excerpt}</p> : null}
			<div className="card-actions justify-end">
				<Link href={`/projects/${slug}`} className="btn btn-link">
					View More
				</Link>
				{/* <ProjectLinks project={project} /> */}
			</div>
		</Card>
	);
}
