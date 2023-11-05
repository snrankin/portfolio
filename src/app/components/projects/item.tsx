'use client';

import classNames from 'classnames';
import { isEmpty, omit, set } from 'lodash';
import React, { HTMLProps } from 'react';
import Card, { CardProps } from '../card/card';
import { displayDate, simplifyUrl } from '@/app/lib/utils';
import Link from 'next/link';
import { IProject, IProjectLinks } from '@/app/lib/interfaces';
import { paramCase } from 'change-case-all';
import IconLink from '../icons/link';
export interface ProjectCardProps extends CardProps, IProject {}

export function ProjectLinks(links: IProjectLinks) {
	let { github, bitbucket, npm, website } = links;
	return (
		<>
			{github != undefined && (
				<IconLink
					href={github}
					group="dev"
					icon="github"
					title={simplifyUrl(github).replace('github.com/', '')}
					titleDisplay="inline"
					target="_blank"
				/>
			)}
			{bitbucket != undefined && (
				<IconLink
					href={bitbucket}
					group="dev"
					icon="bitbucket"
					title={simplifyUrl(bitbucket).replace('bitbucket.com/', '')}
					titleDisplay="inline"
					target="_blank"
				/>
			)}
			{npm != undefined && (
				<IconLink
					href={npm}
					group="dev"
					icon="npm"
					title={simplifyUrl(npm).replace('npmjs.com/package/', '')}
					titleDisplay="inline"
					target="_blank"
				/>
			)}
		</>
	);
}
export default function Project(props: ProjectCardProps) {
	let { startDate, endDate, summary, url, repo } = props;

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
		'links',
	]);

	let subtitle = displayDate(startDate, endDate);

	let title = props.title != undefined ? props.title : '';

	let displayTitle = props.shortTitle != undefined ? props.shortTitle : title;

	set(attr, 'title', displayTitle);

	let slug = props.slug != undefined ? props.slug : paramCase(displayTitle);
	let classnames = classNames(props.className, `project-${slug}`);

	set(attr, 'className', classnames);

	return (
		<Card {...attr}>
			<p>
				{url != undefined ? (
					<a href={url} target="_blank">
						{simplifyUrl(url)}
					</a>
				) : null}
				{repo != undefined && url == undefined ? (
					<a href={repo} target="_blank">
						{simplifyUrl(url)}
					</a>
				) : null}
			</p>
		</Card>
	);
}
