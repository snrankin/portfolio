import React from 'react';

import Image from 'next/image';

import Calendar from '@/img/calendar.svg';

import { displayDate, getIconString } from '../lib/utils';
import { uniq } from 'lodash';

type HighlightItemProps = {
	content: string;
};
function HighlightItem(props: HighlightItemProps): JSX.Element {
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

			let iconVal = `${getIconString(matchVal)} ${matchVal}`;
			content = content.replaceAll(matchVal, iconVal);
		});
	}

	return <li dangerouslySetInnerHTML={{ __html: content }}></li>;
}

type HighlightListProps = {
	items: string[];
};

export function HighlightList(props: HighlightListProps) {
	return (
		<ul className="list-disc">
			{props.items.map((el, i) => {
				if (typeof el === 'string') {
					return <HighlightItem content={el} key={i} />;
				}
			})}
		</ul>
	);
}

function companyLink(name: string, url: string) {
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
export default function TimelineItem(props: any) {
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
	let { street, city, locality, localityCode, postalCode, countryCode } =
		location;

	return (
		<div className="grid grid-cols-[2rem_1fr] gap-x-5 lg:grid-cols-[max-content_2rem_1fr] w-full max-w-full ">
			<span className="items-center justify-center p-1.5 w-8 h-8 btn btn-icon btn-circle btn-info  lg:col-start-2">
				<span className="icon">
					<Calendar className="block stroke-2" />
				</span>
			</span>
			<p className="uppercase text-neutral font-black block whitespace-nowrap col-start-2 row-start-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-w-[170px] lg:text-right">
				{displayDate(startDate, endDate)}
			</p>
			<div className="flex flex-col items-center row-span-2 col-span-1 col-start-1 lg:col-start-2">
				<span className="w-0.5 bg-gray-200 grow"></span>
			</div>
			<div className="pb-11 col-start-2 row-start-2 lg:col-start-3 lg:row-span-2  lg:row-start-1">
				<div className="prose">
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

					{highlights != undefined && highlights.length > 0 ? (
						<ul className="list-disc">
							{highlights.map((el: string, i: number) => {
								if (typeof el === 'string') {
									return (
										<HighlightItem content={el} key={i} />
									);
								}
							})}
						</ul>
					) : null}
				</div>
			</div>
		</div>
	);
}
