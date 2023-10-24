import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
export function displayDate(start: Date | string, end: Date | string | null = null, format: string = 'MMM YY'): string {
	let output = '';

	if (dayjs(start).isValid()) {
		output += ` ${dayjs(start).format(format)}`;
	}

	if (dayjs(end).isValid()) {
		output += ` &ndash; ${dayjs(end).format(format)}`;
	} else if (typeof end === 'string') {
		output += ` &ndash; ${end}`;
	}

	return output;
}
