'use client';
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import Icon, { IconProps } from '@/components/icons/icon-item';

export interface SkillProps extends Omit<IconProps, 'group'> {}

export default function Skill(props: SkillProps) {
	let args: IconProps = { group: 'dev', title: props.icon, ...props };

	return <Icon {...args} />;
}
