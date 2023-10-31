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
		'p-2': props.mobile,
		shadow: props.mobile,
		'bg-base-100': props.mobile,
		'rounded-box': props.mobile,
		'w-min': props.mobile,
	});
	return (
		<ul className={menuClasses}>
			<li data-section="about">
				<Link className="whitespace-nowrap" href="#about">
					About
				</Link>
			</li>
			<li data-section="projects">
				<Link className="whitespace-nowrap" href="#projects">
					Projects
				</Link>
			</li>
			<li data-section="work-history">
				<Link className="whitespace-nowrap" href="#work-history">
					Work History
				</Link>
			</li>
		</ul>
	);
}
