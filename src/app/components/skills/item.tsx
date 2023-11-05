'use client';
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import Icon, { IconProps } from '@/app/components/icons/icon';
import { camelCase, lowerCase, omit, set } from 'lodash';
import { hasIcon } from '@/app/lib/icons';
// enum SkillType {
// 	languages = 'languages',
// 	frameworks = 'frameworks',
// 	cms = 'cms',
// 	tools = 'tools',
// 	software = 'software',
// }
// export type SkillType =
// 	| 'languages'
// 	| 'frameworks'
// 	| 'cms'
// 	| 'tools'
// 	| 'software';
export interface SkillProps extends Omit<IconProps, 'group'> {}

export default function Skill(props: SkillProps) {
	let args: IconProps = { group: 'dev', title: props.icon, ...props };

	console.log('🚀 ~ file: item.tsx:14 ~ Skill ~ args:', args);

	return <Icon {...args} />;
}
