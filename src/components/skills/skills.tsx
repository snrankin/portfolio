'use client';
import React, { useState, HTMLProps } from 'react';

import classNames from 'classnames';
import { get, groupBy, isEmpty, set, omit, pick, isArray } from 'lodash';
import Card, { CardProps } from '../card/card';
import Skill, { SkillProps } from './item';
import SkillsGroup, { SkillsGroupProps } from './group';
import { titleCase } from 'change-case-all';
import { ISkills, ISkill } from '../../lib/api/skills';
export interface SkillsListProps extends HTMLProps<HTMLDivElement> {
	groups?: string;
	skills: ISkills;
	groupProps?: Omit<SkillsGroupProps, 'group' | 'groupName'>;
	langClass?: string;
	cmsClass?: string;
	toolClass?: string;
	frameClass?: string;
	softClass?: string;
}

export default function SkillsList(props: SkillsListProps) {
	let { groupProps, langClass, cmsClass, toolClass, frameClass, softClass } =
		props;

	let attr: HTMLProps<HTMLDivElement> = omit(props, [
		'groups',
		'groupProps',
		'langClass',
		'cmsClass',
		'toolClass',
		'frameClass',
		'softClass',
	]);
	let groupsNames =
		props.groups != undefined
			? props.groups.split(',')
			: ['Languages', 'Frameworks', 'CMS', 'Tools', 'Software'];

	let groups: { [key: string]: ISkill[] } = {};

	let pickedGroups = pick(props.skills, groupsNames);
	Object.entries(pickedGroups).map(([k, v]) => {
		if (isArray(v)) {
			if ('category' in v[0]) {
				groups[k] = v;
			}
		}
	});

	return (
		<div {...attr}>
			{Object.entries(groups).map(([k, v]) => {
				let classes = '';
				switch (k) {
					case 'Languages':
						classes = classNames(
							groupProps?.groupClasses,
							langClass
						);
						break;
					case 'CMS':
						classes = classNames(
							groupProps?.groupClasses,
							cmsClass
						);
						break;
					case 'Frameworks':
						classes = classNames(
							groupProps?.groupClasses,
							frameClass
						);
						break;
					case 'Tools':
						classes = classNames(
							groupProps?.groupClasses,
							toolClass
						);
						break;
					case 'Software':
						classes = classNames(
							groupProps?.groupClasses,
							softClass
						);
						break;
				}

				let skillsGroup: SkillsGroupProps =
					groupProps != undefined
						? {
								...groupProps,
								groupName: k,
								group: v,
								groupClasses: classes,
						  }
						: { groupName: k, group: v, groupClasses: classes };

				return <SkillsGroup key={k} {...skillsGroup} />;
			})}
		</div>
	);
}