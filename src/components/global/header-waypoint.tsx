'use client';

import Link from 'next/link';
import React, {
	useState,
	useRef,
	useEffect,
	createContext,
	useLayoutEffect,
} from 'react';
import SiteLinks from './site-links';
import Nav from '@/components/nav/nav';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';
import ThemeButton from '@/components/theme-swap/theme-button';
import Logo from './logo';

export const HeaderWaypointContext = createContext({
	height: 0,
	isScrolled: false,
});

export default function HeaderWaypoint({
	children,
}: {
	children: React.ReactNode;
}) {
	const [height, setHeight] = useState(0);
	const [isScrolled, setScrolled] = useState(false);
	const header = useRef(null);

	useLayoutEffect(() => {
		const el = header.current;
		if (window != undefined) {
			function handleResize() {
				// @ts-ignore
				var clientHeight = el != null ? el.offsetHeight : 0;

				console.log(
					'🚀 ~ file: header-waypoint.tsx:40 ~ handleResize ~ clientHeight:',
					clientHeight
				);

				if (clientHeight === height) return;
				requestAnimationFrame(function updateViewportHeight() {
					setHeight(clientHeight);
				});
			}
			handleResize();
			window.addEventListener('resize', handleResize);

			if (window.scrollY == 0) {
				setScrolled(false);
			} else {
				setScrolled(true);
			}
		}
	}, [height]);

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
		<HeaderWaypointContext.Provider value={{ height, isScrolled }}>
			<header id="site-header" className={headerClasses} ref={header}>
				{children}
			</header>
			<Waypoint onEnter={handleEnter} onLeave={handleExit}>
				<div
					className="spacer z-50 static print:hidden"
					style={{
						height: `${height}px`,
						marginBottom: `-${height}px`,
					}}
				></div>
			</Waypoint>
		</HeaderWaypointContext.Provider>
	);
}
