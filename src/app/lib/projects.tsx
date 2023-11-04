import { IProject } from './interfaces';

// ========================================================================== //
// ================================= LA Zoo ================================= //
// ========================================================================== //

import LAZooDesktop from '@/img/lazoo-desktop.png';
import LAZooTablet from '@/img/lazoo-tablet.png';
import LAZooMobile from '@/img/lazoo-mobile.png';
export const lazoo: IProject = {
	title: 'LA Zoo Website Redesign',
	shortTitle: 'LA Zoo Website',
	slug: 'lazoo',
	startDate: '2020-02-28',
	endDate: '2021-03-31',
	summary:
		'Complete redesign of the LA Zoo website. Built using Sage 9 Laravel Wordpress theme, Advanced Custom Fields and custom Gutenberg blocks',
	url: 'https://www.lazoo.org',
	image: LAZooDesktop,
	highlights: ['WordPress', 'Laravel', 'PHP', 'React', 'Webpack'],
	desktop: LAZooDesktop,
	tablet: LAZooTablet,
	mobile: LAZooMobile,
};

// ========================================================================== //
// =========================== WP ReadMe Generator ========================== //
// ========================================================================== //

export const wpReadMe: IProject = {
	title: 'WP ReadMe Generator NPM Package',
	shortTitle: 'WP ReadMe Generator',
	summary:
		'Complete redesign of the LA Zoo website. Built using Sage 9 Laravel Wordpress theme, Advanced Custom Fields and custom Gutenberg blocks',
	slug: 'wp-readme',
	repo: 'https://github.com/snrankin/generate-wp-readme',
	url: 'https://www.npmjs.com/package/@snrankin/generate-wp-readme',
	highlights: ['TypeScript', 'NodeJS', 'JavaScript'],
};

export const spectrum: IProject = {
	title: 'Spectrum Medical Care Center Redesign',
	shortTitle: 'Spectrum Medical',
	slug: 'spectrum',
	url: 'https://spectrummedicalcareaz.com',
	highlights: ['TypeScript', 'NodeJS', 'WordPress', 'JavaScript'],
};

import MidfirstDesktop from '@/img/midfirst-desktop.png';
import MidfirstTablet from '@/img/midfirst-tablet.png';
import MidfirstMobile from '@/img/midfirst-mobile.png';
export const midfirst: IProject = {
	title: 'MidFirst Bank Website Redesign',
	shortTitle: 'MidFirst Bank',
	slug: 'midfirst',
	url: 'https://midfirst.com',
	highlights: ['Handlebars.JS', 'Kentico', 'C#', 'JavaScript'],
	desktop: MidfirstDesktop,
	tablet: MidfirstTablet,
	mobile: MidfirstMobile,
};

export const skipro: IProject = {
	title: 'SkiPro Website Redesign',
	shortTitle: 'SkiPro',
	slug: 'skipro',
	url: 'https://skipro.com',
	highlights: ['Shopify', 'Liquid', 'JavaScript'],
};

export const riester: IProject = {
	title: 'RIESTER Advertising Agency Website Redesign',
	shortTitle: 'RIESTER',
	slug: 'riester',
	url: 'https://riester.com',
	highlights: ['WordPress', 'PHP', 'JavaScript'],
};

export const ProjectsList: IProject[] = [
	lazoo,
	wpReadMe,
	midfirst,
	skipro,
	spectrum,
	riester,
];
