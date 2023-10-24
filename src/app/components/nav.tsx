'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
export default function Nav(props: any): JSX.Element {
	var menuClasses = classNames({
		menu: true,
		'menu-sm': props.mobile,
		'menu-horizontal': !props.mobile,
		'dropdown-content': props.mobile,
		'z-[1]': true,
	});
	return (
		<ul className={menuClasses}>
			<li>
				<Link href="#about">About</Link>
			</li>
			<li>
				<Link href="#projects">Projects</Link>
			</li>
			<li>
				<Link href="#work-history">Work History</Link>
			</li>
		</ul>
	);
}
