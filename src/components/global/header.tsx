import HeaderWaypoint from './header-waypoint';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SiteLinks from './site-links';
import Nav from '@/components/nav/nav';
import ThemeButton from '@/components/theme-swap/theme-button';
import Logo from './logo';
import { IProject } from '@/lib/api/projects';
interface HeaderProps {
	projects?: IProject[];
}

export default function Header(props: HeaderProps) {
	return (
		<>
			<HeaderWaypoint>
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
						<SiteLinks projects={props.projects} />
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
							<SiteLinks projects={props.projects} />
						</Nav>
					</div>
				</div>
			</HeaderWaypoint>
		</>
	);
}
