'use client';
import React, { HTMLProps } from 'react';

import classNames from 'classnames';
import { omit } from 'lodash';
import SkillsGroup, { SkillsGroupProps } from './group';
import { TypeSkillFields, sortSkills } from '@/lib/types';
export interface SkillsListProps extends HTMLProps<HTMLDivElement> {
	groups?: string;
	skills?: TypeSkillFields[];
	groupProps?: Omit<SkillsGroupProps, 'group' | 'groupName'>;
	langClass?: string;
	cmsClass?: string;
	toolClass?: string;
	frameClass?: string;
	softClass?: string;
}

export const skillGroupColors: { [key: string]: string } = {
	languages: 'primary',
	frameworks: 'secondary',
	cms: 'accent',
	tools: 'warning',
	software: 'success',
};

export default function SkillsList(props: SkillsListProps) {
	let {
		groupProps,
		langClass,
		cmsClass,
		toolClass,
		frameClass,
		softClass,
		skills,
	} = props;

	let attr: HTMLProps<HTMLDivElement> = omit(props, [
		'groups',
		'groupProps',
		'langClass',
		'cmsClass',
		'toolClass',
		'frameClass',
		'softClass',
		'skills',
	]);
	let groupsNames =
		props.groups != undefined
			? props.groups.split(',')
			: ['Languages', 'Frameworks', 'CMS', 'Tools', 'Software'];

	let groups = sortSkills(props.skills);

	return (
		<>
			{!!skills && (
				<div {...attr}>
					{Object.entries(groups).map(([k, v]) => {
						let classes = '';
						switch (k) {
							case 'Languages':
								classes = classNames(
									classes,
									groupProps?.className,
									langClass
								);
								break;
							case 'CMS':
								classes = classNames(
									classes,
									groupProps?.className,
									cmsClass
								);
								break;
							case 'Frameworks':
								classes = classNames(
									classes,
									groupProps?.className,
									frameClass
								);
								break;
							case 'Tools':
								classes = classNames(
									classes,
									groupProps?.className,
									toolClass
								);
								break;
							case 'Software':
								classes = classNames(
									classes,
									groupProps?.className,
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
										className: classes,
								  }
								: {
										groupName: k,
										group: v,
										className: classes,
								  };

						return <SkillsGroup key={k} {...skillsGroup} />;
					})}
				</div>
			)}
		</>
	);
}
