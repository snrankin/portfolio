'use client';
import React, { useState, HTMLProps } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { omit, set } from 'lodash';
import IconSwap from '../icons/icon-swap';
import Icon from '../icons/icon-item';

interface NavProps extends Omit<HTMLProps<HTMLElement>, 'size'> {
	size?: 'xs' | 'sm' | 'md' | 'lg';
	direction?: 'horizontal' | 'vertical';
	dropdown?: 'end' | 'top' | 'bottom' | 'left' | 'right';
	menuClasses?: string;
	btnClasses?: string;
	menuOpenedIcon?: string;
	menuClosedIcon?: string;
	menuOpenedIconGroup?: 'web' | 'dev' | 'ios';
	menuClosedIconGroup?: 'web' | 'dev' | 'ios';
	inNavbar: boolean;
	dropdownLabel?: JSX.Element;
}
export default function Nav(props: NavProps): JSX.Element {
	let {
		size,
		dropdown,
		inNavbar,
		menuOpenedIcon,
		menuClosedIcon,
		menuOpenedIconGroup,
		menuClosedIconGroup,
		children,
		dropdownLabel,
	} = props;

	let direction = props.direction != undefined ? props.direction : 'vertical';

	if (inNavbar && props.direction == undefined) {
		direction = 'horizontal';
	}

	let dropdownClass = dropdown != undefined ? `dropdown-${dropdown}` : '';

	let navClasses = classNames(props.className, dropdownClass, {
		dropdown: dropdown != undefined,
		'dropdown-hover': dropdown != undefined,
	});

	let menuSize = size != undefined ? `menu-${size}` : '',
		menuDirection = direction != undefined ? `menu-${direction}` : '';

	let menuClasses = classNames(props.menuClasses, menuSize, {
		menu: !dropdown,
		'menu-horizontal': direction == 'horizontal',
		'dropdown-content': !!dropdown,
	});

	let buttonClasses = classNames('btn', props.btnClasses);

	let navAttr = omit(props, [
		'dropdownLabel',
		'label',
		'size',
		'direction',
		'dropdown',
		'btnClasses',
		'menuOpenedIcon',
		'menuClosedIcon',
		'menuOpenedIconGroup',
		'menuClosedIconGroup',
		'inNavbar',
		'menuClasses',
	]);

	set(navAttr, 'className', navClasses);

	let menuAttr: HTMLProps<HTMLUListElement> = {
		className: menuClasses,
	};
	if (inNavbar) {
		set(menuAttr, 'role', 'menubar');
		if (direction == 'vertical') {
			set(menuAttr, 'aria-orientation', direction);
		}
	} else {
		set(menuAttr, 'role', 'menu');
		set(menuAttr, 'aria-orientation', direction);
	}

	return (
		<nav {...navAttr}>
			{dropdownLabel}

			<ul {...menuAttr}>{children}</ul>
		</nav>
	);
}
