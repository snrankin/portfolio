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

	let dropdownClass = !!dropdown ? `dropdown-${dropdown}` : '';

	let navClasses = classNames(props.className, dropdownClass, {
		'[&[data-te-collapse-show]]:block': !!dropdown || !!navbar,
		hidden: !!dropdown || !!navbar,
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

	if (!!props.dropdown) {
		set(navAttr, 'data-te-collapse-item', null);
	}

	set(navAttr, 'className', navClasses);

	let menuAttr: HTMLProps<HTMLUListElement> = {
		className: menuClasses,
	};
	if (navbar) {
		set(navAttr, 'aria-labelledby', `${props.id}-btn`);
		set(menuAttr, 'role', 'menubar');
		set(menuAttr, 'data-te-navbar-nav-ref', null);
		if (direction == 'vertical') {
			set(menuAttr, 'aria-orientation', direction);
		}
	} else {
		set(menuAttr, 'role', 'menu');
		set(menuAttr, 'aria-orientation', direction);
	}

	useEffect(() => {
		const init = async () => {
			const { Collapse, initTE } = await import('tw-elements');
			initTE({ Collapse });
		};
		init();
	}, []);

	return (
		<nav {...navAttr}>
			<ul {...menuAttr}>{children}</ul>
		</nav>
	);
}
