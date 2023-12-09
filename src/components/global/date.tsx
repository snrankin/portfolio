import dayjs from 'dayjs';

import { NDASH, NOBREAK } from '@/lib/symbols';

var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
export default function Date({
	start,
	end,
	format,
	dashClasses,
	isCurrent,
}: {
	start?: Date | string;
	end?: Date | string;
	format?: string;
	dashClasses?: string;
	isCurrent?: boolean;
}) {
	let startDate = null,
		endDate = null,
		startFormat = format ?? 'MMM YYYY';

	format = format ?? 'MMM YYYY';

	let current = isCurrent != undefined && isCurrent ? 'Present' : '';

	let startIsValid = start != undefined && dayjs(start).isValid(),
		endIsValid = end != undefined && dayjs(end).isValid();

	end = endIsValid ? end : current;

	if (startIsValid) {
		let startYear = dayjs(start).year();

		// if (endIsValid) {
		// 	let endYear = dayjs(end).year();
		// 	const regex = new RegExp('(\\s|\\/)*[Yy]+', 'gm');
		// 	if (startYear == endYear) {
		// 		startFormat = startFormat.replace(regex, '');
		// 	}
		// }
		startDate = (
			<time className="start-date" dateTime={dayjs(start).toISOString()}>
				{dayjs(start).format(startFormat)}
			</time>
		);
	}

	if (endIsValid) {
		endDate = (
			<time className="end-date" dateTime={dayjs(end).toISOString()}>
				{dayjs(end).format(format)}
			</time>
		);
	} else if (typeof end === 'string' && end != '') {
		endDate = <span className="end-date">{end}</span>;
	}

	return (
		<>
			{startDate}
			{endDate != null && (
				<>
					{NOBREAK}
					<span className={dashClasses}>{NDASH}</span>
					{NOBREAK}
					{endDate}
				</>
			)}
		</>
	);
}
