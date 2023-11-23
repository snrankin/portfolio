'use client';
import Link from 'next/link';
import React, { useContext, useState, useEffect, useRef } from 'react';
import SiteLinks from '@/components/nav/site-links';
import NavBar from '@/components/nav/navbar';
import styles from './global.module.css';
import ThemeButton from '@/components/theme-swap/theme-button';
import Logo from './logo';
import { NavLink } from '@/lib/types';
import { useCollapse } from 'react-collapsed';
interface HeaderProps {
	links?: NavLink[];
}

export default function Header(props: HeaderProps) {
	const [isOpen, setOpen] = useState(false);
	const { getCollapseProps, getToggleProps } = useCollapse({
		isExpanded: isOpen,
	});
	let ref = useRef(null);

	const toggleDropdown = () => {
		isOpen ? setOpen(false) : setOpen(true);
	};
	const closeDropdown = () => {
		isOpen && setOpen(false);
	};

	return (
		<div className="relative navbar px-pg lg:px-4">
			{/* Hamburger button for mobile view */}

			<div className="navbar-start">
				<Link
					href="/"
					className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] block"
				>
					<Logo className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" />
				</Link>
			</div>
			<div className="navbar-center" ref={ref} onClick={closeDropdown}>
				<nav
					{...getCollapseProps()}
					className=" absolute top-full right-0 md:relative md:top-auto md:right-auto w-screen md:w-auto md:!flex md:!h-auto grow dark:bg-slate-900 bg-base-100 md:!bg-transparent shadow md:shadow-none"
				>
					<NavBar links={props.links} />
				</nav>
			</div>
			<div className="navbar-end">
				<ThemeButton />
				<button
					{...getToggleProps({ onClick: toggleDropdown })}
					className="md:hidden flex flex-col justify-center border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
				>
					<span
						className={`${styles.hamburger} ${styles.hamburgerSpin}`}
					>
						<span className={`${styles.hamburgerBox}`}>
							<span className={`${styles.hamburgerInner}`}></span>
						</span>
					</span>
				</button>
			</div>
		</div>
	);
}
