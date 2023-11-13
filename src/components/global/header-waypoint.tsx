'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SiteLinks from './site-links';
import Nav from '@/components/nav/nav';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';
import ThemeButton from '@/components/theme-swap/theme-button';
import Logo from './logo';

export default function HeaderWaypoint({
	children,
}: {
	children: React.ReactNode;
}) {
	let [isScrolled, setScrolled] = useState(false);

	let headerClasses = classNames({
		fixed: true,
		'print:hidden': true,
		'top-0': true,
		'left-0': true,
		'w-screen': true,
		'transition-all': true,
		'duration-200': true,
		'bg-transparent': !isScrolled,
		'bg-base-100': isScrolled,
		'z-50': true,
		'shadow-sm': isScrolled,
		'shadow-none': !isScrolled,
	});

	useEffect(() => {
		if (window != undefined) {
			if (window.scrollY == 0) {
				setScrolled(false);
			} else {
				setScrolled(true);
			}
		}
	}, []);

	const handleExit = (e: any) => {
		if (e.currentPosition == 'above') {
			setScrolled(true);
		}
	};

	const handleEnter = (e: any) => {
		if (e.currentPosition == 'inside') {
			setScrolled(false);
		}
	};

	return (
		<>
			<header id="site-header" className={headerClasses}>
				{children}
			</header>
			<Waypoint onEnter={handleEnter} onLeave={handleExit}>
				<div className="spacer min-h-[80px] -mb-[80px] z-50 static print:hidden"></div>
			</Waypoint>
		</>
	);
}
