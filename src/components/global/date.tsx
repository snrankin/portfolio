import dayjs from 'dayjs';
import { isString, replace, isEmpty, trimEnd } from 'lodash';

var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
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

	var nDash = String.fromCharCode(8211);

	return (
		<>
			{startDate}
			{end != undefined && dayjs(end).isValid() ? (
				<>
					{nDash}
					{endDate}
				</>
			) : null}
		</>
	);
}
