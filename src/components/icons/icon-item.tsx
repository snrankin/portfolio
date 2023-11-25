'use client';

import { hasIcon, getIconName, getIcon } from '@/components/icons/icons';
import React, { createContext, useContext, HTMLProps } from 'react';
import { get, isEmpty, startsWith, omit, set } from 'lodash';
import classNames from 'classnames';
import './icons.css';
export interface IconConfig {
	icon?: string;
	group?: 'web' | 'dev' | 'ios' | 'feather';
	titleDisplay?: 'hidden' | 'popover' | 'inline' | 'block';
	titleClasses?: string;
	iconClasses?: string;
	title?: string;
	colored?: boolean;
}
export interface IconProps extends IconConfig, HTMLProps<HTMLSpanElement> {}

export type IIconContext = {
	group?: 'web' | 'dev' | 'ios' | 'feather';
	titleDisplay?: 'hidden' | 'popover' | 'inline' | 'block';
	titleClasses?: string;
	iconClasses?: string;
};

export const IconContextConfig: IIconContext = {
	group: 'web',
	titleDisplay: 'hidden',
	titleClasses: '',
	iconClasses: '',
};

export const IconContext = createContext(IconContextConfig);

export default function Icon(props: IconProps): JSX.Element {
	let { group, titleDisplay, titleClasses, iconClasses } = props;
	let iconName = props.icon != undefined ? props.icon : '';
	const HAS_ICON = hasIcon(iconName, group);

	let icon;

	const classes = classNames(
		{
			'items-center': titleDisplay == 'inline' && !isEmpty(props.title),
			'gap-1': titleDisplay == 'inline' && !isEmpty(props.title),
			'inline-flex': titleDisplay == 'inline' && !isEmpty(props.title),
			tooltip: titleDisplay == 'popover',
		},
		'icon-wrapper',
		props.className
	);

	let iconProps: HTMLProps<HTMLSpanElement> = {
		'aria-hidden': 'true',
		role: 'presentation',
		className: classNames('icon', iconClasses),
	};

	titleClasses = classNames(
		'icon-label',
		{
			'sr-only': titleDisplay == 'hidden' || titleDisplay == 'popover',
		},
		titleClasses
	);

	let attr = omit(props, [
		'titleDisplay',
		'titleClasses',
		'iconClasses',
		'icon',
		'title',
		'group',
		'name',
		'colored',
	]);

	if (titleDisplay == 'popover' && HAS_ICON) {
		set(attr, 'data-tip', props.icon);
	}

	set(attr, 'className', classes);

	if (!isEmpty(iconName)) {
		icon = getIcon(iconName, group, props.colored);
	}
	return (
		<>
			{!isEmpty(iconName) && (
				<span {...attr}>
					<span {...iconProps}>{icon}</span>
					{!isEmpty(props.title) && (
						<span className={titleClasses}>{props.title}</span>
					)}
				</span>
			)}
		</>
	);
}
