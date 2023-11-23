'use client';
import React, {
	useContext,
	useState,
	useEffect,
	useRef,
	HTMLProps,
} from 'react';
import { TypePostLinkFields } from '@/lib/types';
import Link from 'next/link';
import { SectionContext } from '@/lib/context/section';
import classNames from 'classnames';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Nav from '@/components/nav/nav';

import { useCollapse } from 'react-collapsed';
import { omit } from 'lodash';

interface ProjectMenuProps extends HTMLProps<HTMLLIElement> {
	projects?: TypePostLinkFields[];
	projectClasses?: string;
}
export default function ProjectsNav(props: ProjectMenuProps) {
	const pathname = usePathname();
	const segment = useSelectedLayoutSegment();

	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
	let ref = useRef(null);
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

	const openDropDown = () => {
		setExpanded(true);
	};
	const closeDropDown = () => {
		setExpanded(false);
	};

	let atts = omit(props, 'projects');

	return (
		<li
			role="none"
			ref={ref}
			onMouseEnter={openDropDown}
			onMouseLeave={closeDropDown}
			onClick={closeDropDown}
			{...atts}
		>
			<span className={props.projectClasses}>
				<Link role="menuitem" href="/#projects">
					Projects
				</Link>
				<button
					{...getToggleProps({
						onClick: () =>
							setExpanded((prevExpanded) => !prevExpanded),
					})}
				>
					<span className="sr-only">Projects Menu Toggle</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-5 w-5 block"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</span>
			{!!props.projects && (
				<Nav
					dropdown={true}
					className="md:absolute md:top-full md:-left-2 p-0"
					menuClasses="rounded-b-lg bg-base-100 dark:bg-base-950 p-2  md:shadow ms-0 border-none before:content-none"
					{...getCollapseProps()}
				>
					{props.projects.map(
						({ shortTitle, slug }: TypePostLinkFields) => {
							const isActive = slug === segment;
							let subClasses = classNames(
								'whitespace-nowrap',

								{
									active: isActive,
								}
							);

							return (
								<li key={slug}>
									<Link
										href={`/projects/${slug}`}
										role="menuitem"
										className={subClasses}
									>
										{shortTitle}
									</Link>
								</li>
							);
						}
					)}
				</Nav>
			)}
		</li>
	);
}
