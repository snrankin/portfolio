import React from 'react';

import Image from 'next/image';

import Calendar from '@/icons/calendar.svg';

import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
export function displayDate(start: Date | string, end: Date | string | null = null, format: string = 'MMM YYYY') {
	let startDate, endDate;

	if (dayjs(start).isValid()) {
		startDate = (
			<time className="start-date" dateTime={dayjs(start).toISOString()}>
				{dayjs(start).format(format)}
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
		<a href={url} className="btn btn-link leading-none min-h-0 mt-4 h-max flex-nowrap flex-start justify-start items-start align-text-top pl-0 pr-0 text-left normal-case no-underline font-normal" target="_blank">
			<Image src={favicon} width={16} height={16} alt={`${name} website favicon`} style={{ width: '1em', height: '1em' }} />
			{name}
		</a>
	);
}
export default function TimelineItem(props: any) {
	let { company, position, startDate, endDate, highlights, summary, url, location } = props;
	let { street, city, locality, localityCode, postalCode, countryCode } = location;

	return (
		<div className="grid grid-cols-[max-content_1fr] w-full max-w-full gap-0">
			<div className="flex items-start">
				<p className="uppercase text-neutral font-bold block whitespace-nowrap">{displayDate(startDate, endDate)}</p>
				<span className="items-center justify-center p-1.5 w-8 h-8 btn btn-icon btn-circle btn-primary">
					<span className="icon">
						<Calendar className="block stroke-2" />
					</span>
				</span>
			</div>
			<div className="card card-compact bg-base-100 shadow-xl w-full max-w-full shrink grow">
				<div className="card-body">
					<h3 className="card-title font-semibold block">
						{position}{' '}
						<span className="block">
							<span className="sr-only">at </span>
							{companyLink(company, url)}
						</span>
					</h3>
					{summary != undefined && summary != '' ? <p>{summary}</p> : null}

					<div tabIndex={0} className="collapse p-0  rounded-none">
						<div className="collapse-title pt-0 pb-0 pl-0 rounded-none">View More</div>
						<div className="collapse-content rounded-none">{arrayToList(highlights)}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
