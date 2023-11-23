'use client';
import React, { HTMLProps, useEffect } from 'react';
import classNames from 'classnames';

import { omit, set } from 'lodash';
import { NavLink } from '@/lib/types';
import MenuItems from './menu-items';

interface NavBarProps extends Omit<HTMLProps<HTMLElement>, 'size' | 'id'> {
	links?: NavLink[];
}
export default function NavBar(props: NavBarProps): JSX.Element {
	const depthLevel = 0;
	return (
		<>
			{!!props.links && props.links.length && (
				<ul role="menubar" className="menu md:menu-horizontal">
					{props.links.map((item, index) => {
						return (
							<MenuItems
								{...item}
								key={index}
								depth={depthLevel}
							/>
						);
					})}
				</ul>
			)}
		</>
	);
}
