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
	const pathname = usePathname();
	const sectionCtx: {
		section: string;
		updateSectionHandler: (str: string) => void;
	} = useContext(SectionContext);
	let url = props.url.replace(/^\/#/, '');

	let depth = props.depth;

	let itemClasses = classNames(
		`level-${depth}`,
		'dropdown',

		{
			active: sectionCtx.section == url || pathname.includes(url),
			'dropdown-open': isExpanded,
		}
	);
	let linkClasses = classNames('whitespace-nowrap', 'md:leading-[32px]', {
		'font-bold': depth == 0,
		'font-display': depth == 0,
	});
	let ref = useRef(null);

	const onMouseEnter = () => {
		setExpanded(true);
	};

	const onMouseLeave = () => {
		setExpanded(false);
	};

	const closeDropdown = () => {
		isExpanded && setExpanded(false);
	};

	return (
		<li
			role="none"
			className={itemClasses}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={closeDropdown}
		>
			{props.submenu ? (
				<>
					<label tabIndex={0}>
						<Link href={props.url} className={linkClasses}>
							{props.title}
						</Link>
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
					</label>

					<Dropdown
						links={props.submenu}
						expanded={isExpanded}
						depth={depth}
					/>
				</>
			) : (
				<Link href={props.url} className={linkClasses}>
					{props.title}
				</Link>
			)}
		</li>
	);
}
