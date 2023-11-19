'use client';
import React from 'react';
import classNames from 'classnames';
import { set, omit } from 'lodash';
import Card, { CardProps } from '../card/card';
import Skill, { SkillProps } from './item';
import { titleCase } from 'change-case-all';
import { TypeSkillFields } from '@/lib/types';
export interface SkillsGroupProps extends CardProps {
	group: TypeSkillFields[];
	groupName: string;
	showGroupTitle?: boolean;
	groupClasses?: string;
	skillProps?: SkillProps;
}

export default function SkillsGroup(props: SkillsGroupProps) {
	let group = props.group;
	let classes = classNames('skill-group', props.className);

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
						{group.map((skill: TypeSkillFields, i: number) => {
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
