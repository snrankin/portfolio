'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Logo from '@/img/logo-fill.svg';
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
				<div className="navbar px-pg">
					<div className="navbar-start">
						<Link
							href="/"
							className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] block"
						>
							<svg className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] dark:hidden">
								<use href={`/logos-sprite.svg#logo-dark `} />
							</svg>
							<svg className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] hidden dark:block">
								<use href={`/logos-sprite.svg#logo-light `} />
							</svg>
						</Link>
					</div>
					<Nav
						inNavbar={true}
						direction="horizontal"
						className="navbar-center hidden md:flex"
					>
						<SiteLinks />
					</Nav>
					<div className="navbar-end">
						<ThemeButton />
						<Nav
							inNavbar={true}
							direction="vertical"
							dropdown="end"
							btnClasses="btn-circle justify-center items-center bg-base-100 shadow-sm md:hidden w-[40px] h-[40px]"
							menuClosedIcon="menu"
							menuOpenedIcon="close"
							menuClasses="bg-base-100 rounded"
						>
							<SiteLinks />
						</Nav>
					</div>
				</div>
			</header>
			<Waypoint onEnter={handleEnter} onLeave={handleExit}>
				<div className="spacer min-h-[80px] -mb-[80px] z-50 static"></div>
			</Waypoint>
		</>
	);
}
