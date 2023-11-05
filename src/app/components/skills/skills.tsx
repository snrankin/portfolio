'use client';
import React, { useState, HTMLProps } from 'react';
import { Me } from '@/app/lib/me';
import classNames from 'classnames';
import { get, groupBy, isEmpty, set, omit } from 'lodash';
import Card, { CardProps } from '../card/card';
import Skill, { SkillProps } from './item';
import SkillsGroup, { SkillsGroupProps } from './group';
import { titleCase } from 'change-case-all';
export interface SkillsListProps extends HTMLProps<HTMLDivElement> {
	groups?: string;
	groupProps?: Omit<SkillsGroupProps, 'group'>;
}

export default function SkillsList(props: SkillsListProps) {
	let { groupProps } = props;

	let attr: HTMLProps<HTMLDivElement> = omit(props, ['groups', 'groupProps']);
	let groups =
		props.groups != undefined
			? props.groups.split(',')
			: ['languages', 'frameworks', 'cms', 'tools', 'software'];
	return (
		<div {...attr}>
			{groups.map((group, i) => {
				let skillsGroup =
					groupProps != undefined
						? { group, ...groupProps }
						: { group };
				return <SkillsGroup key={i} {...skillsGroup} />;
			})}
		</div>
	);
}
