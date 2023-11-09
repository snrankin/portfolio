'use client';

import classNames from 'classnames';
import { isEmpty, omit, pick, pull, set } from 'lodash';
import React, { HTMLProps } from 'react';
import Icon from '../icons/icon-item';
import Card, { CardProps } from '../card/card';
import { displayDate, simplifyUrl } from '@/app/lib/utils';
import Link from 'next/link';
import IconLink from '../icons/link';
import { IProject, IProjectLinks } from '@/app/lib/interfaces';
import { paramCase } from 'change-case-all';
export interface ProjectCardProps extends CardProps, IProject {}
export function ProjectLinks({ project }: { project: IProject }) {
	let links = project.links;

	if (!!links) {
		let { github, bitbucket, npm, website } = links;

		let code = !!github ? github : null;
		if (!!github && bitbucket) {
			code = bitbucket;
		}
		return (
			<>
				{!!code && (
					<IconLink
						href={github}
						group="web"
						icon="code"
						title="View Code"
						titleDisplay="inline"
						target="_blank"
						iconClasses="!text-current"
						className="btn btn-primary"
					/>
				)}
				{!!website && (
					<IconLink
						href={website}
						group="web"
						icon="web"
						title="View Website"
						titleDisplay="inline"
						target="_blank"
						iconClasses="!text-current"
						className="btn btn-secondary"
					/>
				)}
			</>
		);
	}
	return null;
}
export default function Project(props: ProjectCardProps) {
	let { startDate, endDate, summary, url, repo, highlights, links } = props;

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
		'links',
	]);

	let project: IProject = pick(props, [
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
		'links',
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
				{/* <ProjectLinks project={project} /> */}
			</div>
		</Card>
	);
}
