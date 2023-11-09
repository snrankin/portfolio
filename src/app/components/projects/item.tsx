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

export default function Project(props: IProject) {
	let { startDate, endDate, summary, url, repo } = props;

	let title = props.title != undefined ? props.title : '';

	return (
		<li>
			<span className="block">{title}</span>
			{url != undefined ? (
				<a href={url} target="_blank" className="block">
					{simplifyUrl(url)}
				</a>
			) : null}
			{repo != undefined && url == undefined ? (
				<a href={repo} target="_blank" className="block">
					{simplifyUrl(url)}
				</a>
			) : null}
		</li>
	);
}
