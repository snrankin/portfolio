'use client';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import SiteLinks from './site-links';
import Nav from '@/components/nav/nav';
import NavButton from '@/components/nav/nav-button';
import ThemeButton from '@/components/theme-swap/theme-button';
import Logo from './logo';
import { TypePostLinkFields } from '@/lib/types';
import { HeaderContext } from '@/lib/context/header';
import classNames from 'classnames';
interface HeaderProps {
	projects?: TypePostLinkFields[];
}

export default function Header(props: HeaderProps) {
	return (
		<div className="relative navbar px-pg lg:px-4" data-te-navbar-ref>
			{/* Hamburger button for mobile view */}

			<div className="navbar-start">
				<Link
					href="/"
					className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] block"
				>
					<Logo className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" />
				</Link>
			</div>
			<div className="navbar-center grow">
				<Nav
					id="main-nav"
					className="absolute top-full right-0 md:!flex md:relative md:top-auto md:right-auto    w-screen md:w-auto"
					navbar={true}
					menuClasses=" list-style-none pl-0 lg:mt-1 md:flex-row md:items-center gap-3 divide-y md:divide-y-0 bg-base-100  md:bg-transparent shadow !p-pg rounded-b-lg md:shadow-none md:!p-0"
				>
					<SiteLinks projects={props.projects} />
				</Nav>
			</div>
			<div className="navbar-end">
				<ThemeButton />
				<NavButton
					className="md:hidden flex flex-col justify-center border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
					target="main-nav"
					hamburger="spin"
				/>
			</div>
		</div>
	);
}
