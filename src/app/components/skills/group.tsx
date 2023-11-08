'use client';
import React, { useState, HTMLProps } from 'react';
import { Me } from '@/app/lib/me';
import classNames from 'classnames';
import { get, groupBy, isEmpty, set, omit } from 'lodash';
import Card, { CardProps } from '../card/card';
import Skill, { SkillProps } from './item';
import { titleCase } from 'change-case-all';
export interface SkillsGroupProps extends CardProps {
	group: string;
	showGroupTitle?: boolean;

	groupClasses?: string;
	skillProps?: SkillProps;
}

export default function SkillsGroup(props: SkillsGroupProps) {
	let group = get(Me.skills, props.group);

	let classes = classNames(
		'skill-group',
		`skill-group-${props.group}`,
		props.className
	);

	let groupProps = omit(props, [
		'skillProps',
		'groupClasses',
		'showGroupTitle',
		'group',
	]);

	let groupClasses = classNames(props.groupClasses);

	set(groupProps, 'className', classes);
	let title = '';
	if (props.showGroupTitle) {
		if (props.group == 'cms') {
			title = '<abbr title="Content Management Systems">CMSs</abbr>';
		} else {
			title = titleCase(props.group);
		}
	}

	set(groupProps, 'title', title);

	return (
		<>
			{group != undefined && group != null ? (
				<Card {...groupProps}>
					<div className={groupClasses}>
						{group.map((skill: string, i: number) => {
							let skillProps: SkillProps = {
								icon: skill,
								...props.skillProps,
							};

							return <Skill key={i} {...skillProps} />;
						})}
					</div>
				</Card>
			) : null}
		</>
	);
}
