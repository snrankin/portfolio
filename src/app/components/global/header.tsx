'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SiteLinks from './site-links';
import Nav from '@/app/components/nav/nav';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';
import ThemeButton from '@/app/components/theme-swap/theme-button';
import Logo from './logo';
interface HeaderProps {
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header(props: HeaderProps) {
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
				<div className="navbar px-pg">
					<div className="navbar-start">
						<Link
							href="/"
							className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] block"
						>
							<Logo className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" />
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
						<ThemeButton setTheme={props.setTheme} />
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
				<div className="spacer min-h-[80px] -mb-[80px] z-50 static print:hidden"></div>
			</Waypoint>
		</>
	);
}
