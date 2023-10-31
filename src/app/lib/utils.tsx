import dayjs from 'dayjs';
import { get, isEmpty, startsWith } from 'lodash';
import LinkedIn from '@/img/linkedin.svg';
import GitHub from '@/img/github.svg';
import Phone from '@/img/phone.svg';
import Mail from '@/img/mail.svg';
const Shopify = require('@/img/shopify.svg?raw') as string;
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
export type Dictionary = {
	[key: string]: any;
};

export const Icons: Dictionary = {
	WordPress: 'devicon-wordpress-plain colored',
	Laravel: 'devicon-laravel-plain colored',
	JavaScript: 'devicon-javascript-plain colored',
	React: 'devicon-react-original colored',
	PHP: 'devicon-php-plain colored',
	Webpack: 'devicon-webpack-plain colored',
	Git: 'devicon-git-plain colored',
	Bootstrap: 'devicon-bootstrap-plain color',
	Bitbucket: 'devicon-bitbucket-original color',
	HTML: 'devicon-html5-plain colored',
	CSS: 'devicon-css3-plain colored',
	Tailwind: 'devicon-tailwindcss-plain colored',
	Illustraor: 'devicon-illustrator-plain colored',
	NPM: 'devicon-npm-original-wordmark colored',
	Photoshop: 'devicon-photoshop-plain color',
	SASS: 'devicon-sass-original colored',
	WooCommerce: 'devicon-woocommerce-plain colored',
	Yarn: 'devicon-yarn-plain colored',
	XD: 'devicon-xd-plain color',

	GitHub: GitHub,
	Shopify: Shopify,
	NodeJS: 'devicon-nodejs-plain colored',
	TypeScript: 'devicon-typescript-plain colored',
};

export function getIcon(icon: any): JSX.Element {
	icon = get(Icons, icon, '');
	if (!isEmpty(icon)) {
		if (typeof icon == 'string' && !startsWith(icon, '<svg ')) {
			icon = <span className={icon}></span>;
		}
		return (
			<span aria-hidden="true" role="presentation" className="icon">
				{icon}
			</span>
		);
	}
	return <></>;
}

export function getIconString(icon: any): String {
	icon = get(Icons, icon, '');
	if (!isEmpty(icon)) {
		if (!startsWith(icon, '<svg ')) {
			icon = `<span class="${icon}"></span>`;
		}
		return `<span aria-hidden="true" role="presentation" class="icon">
				${icon}
			</span>`;
	}
	return '';
}
