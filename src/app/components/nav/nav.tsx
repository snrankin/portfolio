'use client';
import React, { useState, HTMLProps } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { omit, set } from 'lodash';
import IconSwap from '../icons/icon-swap';
import Icon from '../icons/icon';

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
	} = props;

	let direction = props.direction != undefined ? props.direction : 'vertical';

	if (inNavbar && props.direction == undefined) {
		direction = 'horizontal';
	}

	let dropdownClass = dropdown != undefined ? `dropdown-${dropdown}` : '';

	let navClasses = classNames(props.className, dropdownClass, {
		dropdown: dropdown != undefined,
	});

	let menuSize = size != undefined ? `menu-${size}` : '',
		menuDirection = direction != undefined ? `menu-${direction}` : '';

	let menuClasses = classNames('menu', props.menuClasses, menuSize, {
		'menu-horizontal': direction == 'horizontal',
		'dropdown-content': dropdown != undefined,
	});

	let buttonClasses = classNames('btn', props.btnClasses);

	let navAttr = omit(props, [
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
			{dropdown != undefined ? (
				<>
					{menuOpenedIcon != undefined &&
					menuClosedIcon != undefined ? (
						<IconSwap
							aria-haspopup="true"
							className={buttonClasses}
							iconOff={menuClosedIcon}
							iconOn={menuOpenedIcon}
							groupOff={menuClosedIconGroup}
							groupOn={menuOpenedIconGroup}
						/>
					) : null}
					{menuClosedIcon != undefined &&
					menuOpenedIcon == undefined ? (
						<button aria-haspopup="true" className={buttonClasses}>
							<Icon
								icon={menuClosedIcon}
								group={menuClosedIconGroup}
							/>
						</button>
					) : null}
				</>
			) : null}

			<ul {...menuAttr}>{children}</ul>
		</nav>
	);
}
