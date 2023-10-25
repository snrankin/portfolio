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
		'z-[50]': true,
		'site-nav': true,
	});
	return (
		<ul className={menuClasses}>
			<li data-section="about">
				<Link href="#about">About</Link>
			</li>
			<li data-section="projects">
				<Link href="#projects">Projects</Link>
			</li>
			<li data-section="work-history">
				<Link href="#work-history">Work History</Link>
			</li>
		</ul>
	);
}
