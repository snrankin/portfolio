'use client';

import classNames from 'classnames';
import { isEmpty, omit, set } from 'lodash';
import React, { ButtonHTMLAttributes, HTMLProps } from 'react';

import { getIcon, hasIcon } from '@/components/icons/icons';

import { IconConfig } from './icon-item';

export interface IconButtonProps
	extends IconConfig,
		Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
	displayUrl?: boolean;
}

export default function IconButton(props: IconButtonProps): JSX.Element {
	let { group, titleDisplay, titleClasses, iconClasses, displayUrl } = props;
	let iconName = props.icon != undefined ? props.icon : '';
	const HAS_ICON = hasIcon(iconName, group);

	let icon;

	const classes = classNames(
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
		'displayUrl',
		'title',
		'group',
		'icon',
		'iconClasses',
	]);

	set(attr, 'className', classes);

	let title = props.title != undefined ? props.title : '';

	if (titleDisplay == 'popover' && HAS_ICON) {
		set(attr, 'data-tip', title);
	}

	if (!isEmpty(iconName)) {
		icon = getIcon(iconName, group);
	}
	return (
		<>
			{!isEmpty(iconName) && (
				<button {...attr}>
					<span {...iconProps}>{icon}</span>
					{!isEmpty(props.title) && (
						<span className={titleClasses}>{title}</span>
					)}
				</button>
			)}
		</>
	);
}
