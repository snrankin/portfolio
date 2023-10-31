import React from 'react';

import Image from 'next/image';

import Calendar from '@/img/calendar.svg';

import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
export function displayDate(
	start: Date | string,
	end: Date | string | null = null,
	format: string = 'MMM YYYY'
) {
	let startDate,
		endDate,
		startFormat = format;

	if (dayjs(start).isValid()) {
		let startYear = dayjs(start).year();

		if (dayjs(end).isValid()) {
			let endYear = dayjs(end).year();
			const regex = new RegExp('(\\s|\\/)*[Yy]+', 'gm');
			if (startYear == endYear) {
				startFormat = format.replace(regex, '');
			}
		}
		startDate = (
			<time className="start-date" dateTime={dayjs(start).toISOString()}>
				{dayjs(start).format(startFormat)}
			</time>
		);
	}

	if (dayjs(end).isValid()) {
		endDate = (
			<time className="end-date" dateTime={dayjs(end).toISOString()}>
				{dayjs(end).format(format)}
			</time>
		);
	} else if (typeof end === 'string') {
		endDate = <span className="end-date">{end}</span>;
	}

	var nDash = String.fromCharCode(8211);

	return (
		<>
			{startDate}
			{nDash}
			{endDate}
		</>
	);
}

export function arrayToList(arr?: any[]) {
	if (arr == undefined) {
		return;
	}
	if (arr.length == 0) {
		return;
	}

	let items = arr.map((el, i) => {
		if (typeof el === 'string') {
			return <li key={i}>{el}</li>;
		}
	});

	return <ul className="list-disc">{items}</ul>;
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
			<span className="items-center justify-center p-1.5 w-8 h-8 btn btn-icon btn-circle btn-info">
				<span className="icon">
					<Calendar className="block stroke-2" />
				</span>
			</span>
			<p className="uppercase text-neutral font-black block whitespace-nowrap col-start-2 row-start-1">
				{displayDate(startDate, endDate)}
			</p>
			<div className="flex flex-col items-center row-span-2 col-span-1 col-start-1">
				<span className="w-0.5 bg-gray-200 grow"></span>
			</div>
			<div className="pb-11 col-start-2 row-start-2">
				<div className="prose">
					<h3 className="card-title font-semibold block">
						{position}{' '}
						<span className="block">
							<span className="sr-only">at </span>
							{companyLink(company, url)}
						</span>
					</h3>
					{summary != undefined && summary != '' ? (
						<p>{summary}</p>
					) : null}

					{arrayToList(highlights)}
				</div>
			</div>
		</div>
	);
}
