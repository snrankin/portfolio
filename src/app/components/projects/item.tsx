'use client';

import classNames from 'classnames';
import { isEmpty, omit, set } from 'lodash';
import React, { HTMLProps } from 'react';
import Card, { CardProps } from '../card/card';
import { displayDate, simplifyUrl } from '@/app/lib/utils';
import Link from 'next/link';
import { IProject } from '@/app/lib/interfaces';
import { paramCase } from 'change-case-all';
export interface ProjectCardProps extends CardProps, IProject {}

export default function Project(props: ProjectCardProps) {
	let { startDate, endDate, summary, url, repo, highlights } = props;

	let attr: CardProps = omit(props, [
		'slug',
		'image',
		'startDate',
		'shortTitle',
		'endDate',
		'summary',
		'url',
		'repo',
		'highlights',
		'desktop',
		'tablet',
		'mobile',
	]);

	let subtitle = displayDate(startDate, endDate);

	let title = props.title != undefined ? props.title : '';

	let displayTitle = props.shortTitle != undefined ? props.shortTitle : title;

	set(attr, 'title', displayTitle);

	let slug = props.slug != undefined ? props.slug : paramCase(displayTitle);

	return (
		<Card {...attr}>
			<p>
				<Link href={`/projects/${slug}`} className=" text-[10pt]">
					{`samrankin.dev/projects/${slug}`}
				</Link>
			</p>
		</Card>
	);
}
