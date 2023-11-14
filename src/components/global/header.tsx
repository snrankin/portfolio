'use client';
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import SiteLinks from './site-links';
import Nav from '@/components/nav/nav';
import ThemeButton from '@/components/theme-swap/theme-button';
import Logo from './logo';
import { IProject } from '@/lib/api/projects';
import { ThemeContext } from '@/lib/context/theme';
import { HeaderContext } from '@/lib/context/header';
import classNames from 'classnames';
interface HeaderProps {
	projects?: IProject[];
}

export default function Header(props: HeaderProps) {
	const headerCtx: {
		isScrolled: boolean;
	} = useContext(HeaderContext);

	let btnClasses = classNames(
		'btn-circle justify-center items-center  md:hidden w-[40px] h-[40px]',
		{
			'bg-gray-700': headerCtx.isScrolled,
			'bg-base-100': !headerCtx.isScrolled,
			'text-primary-500': headerCtx.isScrolled,
			'shadow-sm': !headerCtx.isScrolled,
		}
	);

	return (
		<>
			<div className="navbar px-pg lg:px-4">
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
					<SiteLinks projects={props.projects} />
				</Nav>
				<div className="navbar-end">
					<ThemeButton />
					<Nav
						inNavbar={false}
						direction="vertical"
						dropdown="end"
						btnClasses={btnClasses}
						menuClosedIcon="menu"
						menuOpenedIcon="close"
						menuClasses="bg-base-100 rounded-box shadow"
					>
						<SiteLinks projects={props.projects} />
					</Nav>
				</div>
			</div>
		</>
	);
}
