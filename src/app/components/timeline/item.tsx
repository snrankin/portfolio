import React from 'react';

import Image from 'next/image';

import { displayDate } from '@/app/lib/utils';
import { getIconString } from '@/app/lib/icons';
import { uniq, trim } from 'lodash';
import Icon from '../icons/icon';
import { IPosition } from '@/app/lib/interfaces';
import { paramCase } from 'change-case-all';
type HighlightItemProps = {
	content: string;
};
export function HighlightItem(props: HighlightItemProps): JSX.Element {
	const regex = new RegExp('(?<=<(?:b|strong)>)([^<]+)', 'gm');

	let { content } = props;

	let m,
		matches: string[] = [];

	while ((m = regex.exec(content)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}

		// The result can be accessed through the `m`-variable.
		m.forEach((match, groupIndex) => {
			matches.push(match);
		});
	}

	if (matches != null && matches.length > 0) {
		matches = uniq(matches);

		matches.map((match) => {
			let matchVal = match;

			let iconVal = `<span class="inline-flex items-baseline gap-1" style="line-height: 2ex">${getIconString(
				matchVal,
				'dev'
			)} ${matchVal}</span>`;
			content = content.replaceAll(matchVal, iconVal);
		});
	}

	return <li dangerouslySetInnerHTML={{ __html: content }}></li>;
}
export function HighlightList(props: { highlights?: any[] }) {
	return (
		<>
			{props.highlights != undefined && props.highlights.length > 0 ? (
				<ul role="list" className="list-disc marker:text-pink-600">
					{props.highlights.map((el: string, i: number) => {
						if (typeof el === 'string') {
							return <HighlightItem content={el} key={i} />;
						}
					})}
				</ul>
			) : null}
		</>
	);
}
export function companyLink(name: string, url: string) {
	let favicon = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=32`;

	return (
		<a
			href={url}
			className="italic link leading-none flex items-center font-sans gap-2 no-underline link-primary text-lg mt-4"
			target="_blank"
		>
			<Image
				src={favicon}
				width={32}
				height={32}
				alt={`${trim(name)} website favicon`}
				style={{ width: '1em', height: '1em' }}
				className="m-0"
			/>
			{name}
		</a>
	);
}

export interface TimelineItemProps extends IPosition {
	index: number;
}
export default function TimelineItem(props: TimelineItemProps) {
	const {
		company,
		position,
		startDate,
		endDate,
		highlights,
		summary,
		url,
		location,
		index,
	} = props;

	return (
		<>
			<div className="grid relative grid-cols-[1.5em_1fr] lg:grid-cols-[1fr_2rem] gap-x-1 md:gap-x-5 items-center lg:items-stretch">
				{/* Icon */}
				<div
					className={`items-center justify-center  relative lg:col-start-2`}
				>
					<span className="w-0 border-[1px] border-gray-200 absolute top-0 left-2/4 -translate-x-2/4 h-full hidden md:block"></span>
					<Icon
						icon="calendar"
						className="w-full flex items-center justify-center  relative z-10 text-2xl leading-none bg-secondary-500 rounded-full py-1"
						iconClasses="stroke-2"
					/>
				</div>
				{/* Date */}
				<div
					className={`lg:col-start-1 row-start-1 lg:leading-8 font-display uppercase leading-none text-neutral font-black block whitespace-nowrap lg:text-right`}
				>
					{displayDate(startDate, endDate)}
				</div>
			</div>
			{/* Content */}
			<div className={`timeline-content pb-4 lg:pb-11 `}>
				<div className="prose">
					<h3 className="font-semibold block">
						{position}{' '}
						<span className="block">
							<span className="sr-only">at </span>
							{companyLink(company, url)}
						</span>
					</h3>
					<HighlightList highlights={highlights} />
				</div>
			</div>
		</>
	);
}
