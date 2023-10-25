'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Logo from '@/icons/logo.svg';
import Close from '@/icons/close.svg';
import Menu from '@/icons/menu.svg';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';
const ThemeButton = dynamic(() => import('./themeButton'), {
	ssr: false,
});

const Nav = dynamic(() => import('./nav'), {
	ssr: false,
});

export default function Header(): JSX.Element {
	let [isScrolled, setScrolled] = useState(false);
	let headerClasses = classNames({
		fixed: true,
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
					<div className="navbar-center hidden lg:flex">
						<Nav />
					</div>
					<div className="navbar-end">
						<ThemeButton />
						<div className="dropdown">
							<label className="btn  btn-circle aspect-square w-11 btn-primary swap swap-rotate lg:hidden">
								<input type="checkbox" />
								<span className="icon swap-on">
									<Menu className="block stroke-2" />
								</span>
								<span className="icon swap-on">
									<Close className="block stroke-2" />
								</span>
							</label>
							<Nav mobile={true} />
						</div>
					</div>
				</nav>
			</header>
			<Waypoint onEnter={handleEnter} onLeave={handleExit}>
				<div className="spacer min-h-[80px] -mb-[80px] z-50 static"></div>
			</Waypoint>
		</>
	);
}
