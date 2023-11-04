import React from 'react';

import Image from 'next/image';

import { displayDate } from '@/app/lib/utils';
import { getIconString } from '@/app/lib/icons';
import { uniq } from 'lodash';
import Icon from '../icons/icon';
import { IPosition } from '@/app/lib/interfaces';
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

type HighlightListProps = {
	items: string[];
};

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
			className="btn btn-link leading-none min-h-0 mt-4 h-max flex-nowrap flex-start justify-start items-start align-text-top pl-0 pr-0 text-left normal-case no-underline font-normal"
			target="_blank"
		>
			<Image
				src={favicon}
				width={32}
				height={32}
				alt={`${name} website favicon`}
				style={{ width: '1em', height: '1em' }}
				className="m-0"
			/>
			{name}
		</a>
	);
}
export default function TimelineItem(props: IPosition) {
	let {
		company,
		position,
		startDate,
		endDate,
		highlights,
		summary,
		url,
		location,
	} = props;

	return (
		// <div className="grid grid-cols-[2rem_1fr] gap-x-3 md:gap-x-5 lg:grid-cols-[175px_2rem_1fr] w-full max-w-full print:grid-cols-[2rem_1fr] timeline-item">
		<div className="grid grid-cols-[2rem_1fr] gap-x-3 md:gap-x-5 lg:grid-cols-[175px_2rem_1fr] w-full max-w-full timeline-item">
			{/* <span className="items-center justify-center p-1.5 w-4 h-4 btn btn-icon btn-circle btn-info lg:col-start-2 print:col-start-1"> */}
			<span className="items-center justify-center p-1.5 w-4 h-4 btn btn-icon btn-circle btn-info lg:col-start-2">
				<Icon icon="calendar" className="stroke-2" />
			</span>
			{/* <p className="font-display uppercase leading-[2rem] text-neutral font-black block whitespace-nowrap col-start-2 row-start-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-w-[170px] lg:text-right print:col-start-2 print:row-start-1 print:row-span-1 print:text-left"> */}
			<p className="font-display uppercase leading-[2rem] text-neutral font-black block whitespace-nowrap col-start-2 row-start-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-w-[170px] lg:text-right">
				{displayDate(startDate, endDate)}
			</p>
			{/* <div className="flex flex-col items-center row-span-2 col-span-1 col-start-1 lg:col-start-2 print:col-start-1"> */}
			<div className="flex flex-col items-center row-span-2 col-span-1 col-start-1 lg:col-start-2">
				<span className="w-0 border-[1px] border-gray-200 grow"></span>
			</div>
			{/* <div className="timeline-content pb-11 col-span-1 col-start-2 row-start-2 lg:col-start-3 lg:row-span-2 lg:row-start-1 print:col-span-1 print:col-start-2 print:row-start-2"> */}
			<div className="timeline-content pb-11 print:pb-0 col-span-1 col-start-2 row-start-2 lg:col-start-3 lg:row-span-2 lg:row-start-1">
				<div className="prose max-w-full w-auto">
					<h3 className="card-title font-semibold block">
						{position}{' '}
						<span className="block">
							<span className="sr-only">at </span>
							{companyLink(company, url)}
						</span>
					</h3>
					{/* {summary != undefined && summary != '' ? (
						<p>{summary}</p>
					) : null} */}
					<HighlightList highlights={highlights} />
				</div>
			</div>
		</div>
	);
}
