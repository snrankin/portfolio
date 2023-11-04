'use client';

import { hasIcon, getIconName, getIcon } from '@/app/lib/icons';
import React, { createContext, useContext, HTMLProps } from 'react';
import { get, isEmpty, startsWith, omit, set } from 'lodash';
import classNames from 'classnames';

export interface IconConfig {
	icon?: string;
	group?: 'web' | 'dev' | 'ios';
	titleDisplay?: 'hidden' | 'popover' | 'inline' | 'block';
	titleClasses?: string;
	iconClasses?: string;
	title?: string;
}
export interface IconProps extends IconConfig, HTMLProps<HTMLSpanElement> {}

export type IIconContext = {
	group?: 'web' | 'dev' | 'ios';
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
	let { group, titleDisplay, titleClasses, iconClasses } =
		useContext(IconContext);
	let iconName = props.icon != undefined ? props.icon : '';
	const HAS_ICON = hasIcon(iconName, group);

	let icon;

	let classes = classNames(
		{
			'items-center':
				titleDisplay == 'inline' && !isEmpty(props.title) && HAS_ICON,
			'gap-1':
				titleDisplay == 'inline' && !isEmpty(props.title) && HAS_ICON,
			'inline-flex':
				titleDisplay == 'inline' && !isEmpty(props.title) && HAS_ICON,
			tooltip: titleDisplay == 'popover' && HAS_ICON,
		},
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
			'sr-only':
				(titleDisplay == 'hidden' || titleDisplay == 'popover') &&
				HAS_ICON,
		},
		titleClasses
	);

	let attr = omit(props, [
		'titleDisplay',
		'titleClasses',
		'title',
		'group',
		'name',
	]);

	if (titleDisplay == 'popover' && HAS_ICON) {
		set(attr, 'data-tip', props.icon);
	}

	set(attr, 'className', classes);

	if (!isEmpty(iconName)) {
		icon = getIcon(iconName, group);
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
