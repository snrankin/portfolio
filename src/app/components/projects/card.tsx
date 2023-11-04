'use client';

import classNames from 'classnames';
import { isEmpty, omit, set } from 'lodash';
import React, { HTMLProps } from 'react';
import Icon from '../icons/icon';
import Card, { CardProps } from '../card/card';
import { displayDate } from '@/app/lib/utils';
import Link from 'next/link';

import { IProject } from '@/app/lib/interfaces';
import { paramCase } from 'change-case-all';
export interface ProjectCardProps extends CardProps, IProject {}

export default function Project(props: ProjectCardProps) {
	let { startDate, endDate, summary, url, repo, highlights } = props;

	let attr: CardProps = omit(props, [
		'slug',
		'shortTitle',
		'image',
		'startDate',
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

	// if (!isEmpty(subtitle)) {
	// 	set(attr, 'subtitle', subtitle);
	// }

	return (
		<Card {...attr}>
			{summary != undefined ? <p>{summary}</p> : null}

			{highlights != undefined ? (
				<ul className="inline-flex list-none gap-3 p-0 flex-wrap">
					{highlights?.map((h, i) => {
						return (
							<li key={i} className="badge gap-1">
								<Icon icon={h} group="dev" />
								{h}
							</li>
						);
					})}
				</ul>
			) : null}
			<div className="card-actions justify-end">
				<Link href={`/projects/${slug}`} className="btn btn-link">
					View More
				</Link>
				{repo != undefined ? (
					<a href={repo} target="_blank" className="btn btn-link">
						View Repo
					</a>
				) : null}
				{url != undefined ? (
					<a href={url} target="_blank" className="btn btn-link">
						View Website
					</a>
				) : null}
			</div>
		</Card>
	);
}
