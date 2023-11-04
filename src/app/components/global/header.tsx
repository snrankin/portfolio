'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Logo from '@/img/logo.svg';
import Close from '@/img/close.svg';
import Menu from '@/img/menu.svg';
import SiteLinks from './site-links';
import Nav from '../nav/nav';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';
const ThemeButton = dynamic(() => import('./theme-button'), {
	ssr: false,
});

export default function Header(): JSX.Element {
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
		'drop-shadow-md': isScrolled,
		'drop-shadow-none': !isScrolled,
	});

	const atTop = () => {
		if (window.scrollY == 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

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
				<nav className="navbar">
					<div className="navbar-start">
						<Link href="/" className="w-[40px] lg:w-[60px] block">
							<Logo className="fill-base-content w-full" />
						</Link>
					</div>
					<Nav
						inNavbar={true}
						direction="horizontal"
						className="navbar-center hidden lg:flex"
					>
						<SiteLinks />
					</Nav>
					<div className="navbar-end">
						<ThemeButton />
						<Nav
							inNavbar={true}
							direction="vertical"
							dropdown="end"
							btnClasses="btn-circle !h-auto justify-center items-center  aspect-square bg-gray-200 shadow-sm aspect-w-1 aspect-h-1 w-11 md:hidden"
							menuClosedIcon="menu"
							menuOpenedIcon="close"
						>
							<SiteLinks />
						</Nav>
					</div>
				</nav>
			</header>
			<Waypoint onEnter={handleEnter} onLeave={handleExit}>
				<div className="spacer min-h-[80px] -mb-[80px] z-50 static"></div>
			</Waypoint>
		</>
	);
}
