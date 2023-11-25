import dayjs from 'dayjs';
import { isString, replace, isEmpty, trimEnd } from 'lodash';

var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

import { NDASH } from './symbols';

export function displayDate(
	start?: Date | string,
	end?: Date | string,
	format: string = 'MMM YYYY'
) {
	let startDate = null,
		endDate = null,
		startFormat = format;

	if (start != undefined && dayjs(start).isValid()) {
		let startYear = dayjs(start).year();

		if (end != undefined && dayjs(end).isValid()) {
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

	if (end != undefined && dayjs(end).isValid()) {
		endDate = (
			<time className="end-date" dateTime={dayjs(end).toISOString()}>
				{dayjs(end).format(format)}
			</time>
		);
	} else if (typeof end === 'string') {
		endDate = <span className="end-date">{end}</span>;
	}

	return (
		<>
			{startDate}
			{end != undefined && dayjs(end).isValid() ? (
				<>
					{NDASH}
					{endDate}
				</>
			) : null}
		</>
	);
}

export function simplifyUrl(url?: string) {
	let displayUrl = '';
	if (isString(url) && !isEmpty(url)) {
		let link = new URL(url);

		if (!isEmpty(link.hostname)) {
			displayUrl += link.hostname;
		}
		if (!isEmpty(link.pathname)) {
			displayUrl += link.pathname;
		}

		displayUrl = replace(displayUrl, /^(https?:\/\/)?(www.)?/, '');
		displayUrl = trimEnd(displayUrl, '/');
	}
	return displayUrl;
}
export type Dictionary = {
	[key: string]: any;
};
export type StringDictionary = {
	[key: string]: string;
};
