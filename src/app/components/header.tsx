'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Logo from '@/img/logo.svg';
import Close from '@/img/close.svg';
import Menu from '@/img/menu.svg';
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

	const atTop = () => {
		console.log(
			'🚀 ~ file: header.tsx:38 ~ atTop ~ window.scrollY:',
			window.scrollY
		);
		if (window.scrollY == 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	const handleExit = (e: any) => {
		console.log('🚀 ~ file: header.tsx:45 ~ handleExit ~ e:', e);
		if (e.currentPosition == 'above') {
			setScrolled(true);
		}
	};

	const handleEnter = (e: any) => {
		console.log('🚀 ~ file: header.tsx:52 ~ handleEnter ~ e:', e);
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
						<div className="dropdown dropdown-end drop-shadow-sm">
							<button className="btn btn-circle !h-auto justify-center items-center  aspect-square bg-gray-200 shadow-sm aspect-w-1 aspect-h-1 w-11 md:hidden">
								<label className="swap swap-rotate lg:hidden">
									<input type="checkbox" />
									<span className="icon swap-off">
										<Menu className="block stroke-2" />
									</span>
									<span className="icon swap-on">
										<Close className="block stroke-2" />
									</span>
								</label>
							</button>
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
