'use client';
import React, {
	useContext,
	useState,
	useEffect,
	useRef,
	useLayoutEffect,
	HTMLProps,
} from 'react';
import Dropdown from './dropdown';
import { NavLink } from '@/lib/types';
import classNames from 'classnames';
import Link from 'next/link';
import Icon from '../icons/icon-item';
import { SectionContext } from '@/lib/context/section';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { useCollapse } from 'react-collapsed';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import { get } from 'lodash';

const fullConfig = resolveConfig(tailwindConfig);
const verge = require('verge');
interface MenuItem extends NavLink {
	depth: number;
}
export default function MenuItems(props: MenuItem) {
	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
	const pathname = usePathname();
	const sectionCtx: {
		section: string;
		updateSectionHandler: (str: string) => void;
	} = useContext(SectionContext);
	let url = props.url.replace(/^\/#/, '');

	let depth = props.depth;

	let itemClasses = classNames(`level-${depth}`, {
		active: sectionCtx.section == url || pathname.includes(url),
	});
	let linkClasses = classNames('whitespace-nowrap', 'md:leading-[32px]', {
		'font-bold': depth == 0,
		'font-display': depth == 0,
	});
	let ref = useRef(null);
	const openDropdown = () => {
		setExpanded(true);
	};

	const toggleDropdown = () => {
		setExpanded((prev) => !prev);
	};
	const closeDropdown = () => {
		isExpanded && setExpanded(false);
	};
	useLayoutEffect(() => {
		let screenMD = get(fullConfig, 'theme.screens.md', '');

		if (window != undefined) {
			const listener = () => {
				if (verge.mq(`(min-width:${screenMD})`)) {
					setExpanded(false);
				} else {
					setExpanded(true);
				}
			};

			listener();

			window.addEventListener('resize', listener);

			return () => {
				window.removeEventListener('resize', listener);
			};
		}
	}, [isExpanded]);

	useEffect(() => {
		const handler = (event: Event) => {
			if (
				isExpanded &&
				ref.current &&
				// @ts-ignore
				!ref.current.contains(event.target)
			) {
				setExpanded(false);
			}
		};
		document.addEventListener('mousedown', handler);
		document.addEventListener('touchstart', handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener('mousedown', handler);
			document.removeEventListener('touchstart', handler);
		};
	}, [isExpanded]);
	return (
		<li
			role="none"
			className={itemClasses}
			ref={ref}
			onMouseEnter={openDropdown}
			onMouseLeave={closeDropdown}
			onClick={closeDropdown}
		>
			{props.submenu ? (
				<>
					<span className="flex justify-between items-baseline">
						<Link href={props.url} className={linkClasses}>
							{props.title}
						</Link>
						<button
							className="hidden md:flex btn btn-square btn-ghost min-h-0 min-w-0 w-8 h-8 "
							{...getToggleProps}
						>
							{depth > 0 ? (
								<Icon
									icon="chevron-right"
									group="web"
									title={`Open ${props.title} submenu`}
									titleDisplay="hidden"
								/>
							) : (
								<Icon
									icon="chevron-down"
									group="web"
									title={`Open ${props.title} submenu`}
									titleDisplay="hidden"
								/>
							)}
						</button>
					</span>
					<nav {...getCollapseProps()}>
						{' '}
						<Dropdown
							links={props.submenu}
							expanded={isExpanded}
							depth={depth}
						/>
					</nav>
				</>
			) : (
				<Link href={props.url} className={linkClasses}>
					{props.title}
				</Link>
			)}
		</li>
	);
}
