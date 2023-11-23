'use client';
import React, { HTMLProps, useEffect } from 'react';
import classNames from 'classnames';

import { omit, set } from 'lodash';

interface NavProps extends Omit<HTMLProps<HTMLElement>, 'size' | 'id'> {
	size?: 'xs' | 'sm' | 'md' | 'lg';
	direction?: 'horizontal' | 'vertical';
	dropdown?: boolean;
	menuClasses?: string;
	navbar?: boolean;
	id: string;
}
export default function Nav(props: NavProps): JSX.Element {
	let { size, dropdown, navbar, children } = props;

	let direction = !!props.direction ? props.direction : 'vertical';

	if (navbar && !!props.direction) {
		direction = 'horizontal';
	}

	let dropdownClass = '';

	let navClasses = classNames(props.className, dropdownClass, {
		// '[&[data-te-collapse-show]]:block': !!dropdown || !!navbar,
		// hidden: !!dropdown || !!navbar,
	});

	let menuSize = !!size ? `menu-${size}` : '';

	let menuClasses = classNames('menu', props.menuClasses, menuSize, {
		menu: !dropdown,
		'menu-horizontal': direction == 'horizontal',
	});

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
		'navbar',
		'menuClasses',
	]);

	// if (!!props.dropdown) {
	// 	set(navAttr, 'data-te-collapse-item', null);
	// }

	set(navAttr, 'className', navClasses);

	let menuAttr: HTMLProps<HTMLUListElement> = {
		className: menuClasses,
	};
	if (navbar) {
		// set(navAttr, 'aria-labelledby', `${props.id}-btn`);
		set(menuAttr, 'role', 'menubar');
		set(menuAttr, 'aria-orientation', 'horizontal');
	} else {
		set(menuAttr, 'role', 'menu');
		set(menuAttr, 'aria-orientation', direction);
	}

	return (
		<nav {...navAttr}>
			<ul {...menuAttr}>{children}</ul>
		</nav>
	);
}
