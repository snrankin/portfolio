'use client';
import React, { useState, HTMLProps } from 'react';
import { Me } from '@/lib/me';
import classNames from 'classnames';
import { get, groupBy, isEmpty, set, omit } from 'lodash';
import Card, { CardProps } from '../card/card';
import Skill, { SkillProps } from './item';
import { titleCase } from 'change-case-all';
import { ISkill } from '@/lib/api/skills';
export interface SkillsGroupProps extends CardProps {
	group: ISkill[];
	groupName: string;
	showGroupTitle?: boolean;
	groupClasses?: string;
	skillProps?: SkillProps;
}

export default function SkillsGroup(props: SkillsGroupProps) {
	let group = props.group;
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
		'groupName',
	]);

	let groupClasses = classNames(props.groupClasses);

	set(groupProps, 'className', classes);
	let title = '';
	if (props.showGroupTitle) {
		if (props.groupName == 'CMS') {
			title = '<abbr title="Content Management Systems">CMSs</abbr>';
		} else {
			title = titleCase(props.groupName);
		}
	}

	set(groupProps, 'title', title);

	return (
		<>
			{!!group && (
				<Card {...groupProps}>
					<div className={groupClasses}>
						{group.map((skill: ISkill, i: number) => {
							let skillProps: SkillProps = {
								icon: skill.title,
								...props.skillProps,
							};

							return <Skill key={i} {...skillProps} />;
						})}
					</div>
				</Card>
			)}
		</>
	);
}
