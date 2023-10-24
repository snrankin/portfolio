'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Logo from '@/app/logo.svg';
import classNames from 'classnames';

const ThemeButton = dynamic(() => import('./themeButton'), {
	ssr: false,
});

const Nav = dynamic(() => import('./nav'), {
	ssr: false,
});

export default function Header(): JSX.Element {
	let headerClasses = classNames({
		fixed: true,
		'top-0': true,
		'left-0': true,
		'w-screen': true,
		'transition-all': true,
		'duration-200': true,
		'bg-base-100': true,
		'z-50': true,
	});
	return (
		<header className={headerClasses}>
			<nav className="navbar">
				<div className="navbar-start">
					<div className="dropdown">
						<label className="btn btn-circle swap swap-rotate lg:hidden">
							<input type="checkbox" />
							<svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
								<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
							</svg>
							<svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
								<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
							</svg>
						</label>
						<Nav mobile={true} />
					</div>
					<Link href="/" className="w-[40px] lg:w-[60px] block">
						<Logo className="fill-base-content w-full" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<Nav />
				</div>
				<div className="navbar-end">
					<ThemeButton />
				</div>
			</nav>
		</header>
	);
}
