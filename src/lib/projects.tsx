import { IProject } from './interfaces';
// import { project as lazoo } from '@/app/(pages)/projects/lazoo/page';
export const portfolio: IProject = {
	title: "Sam Rankin's Developer Portfolio",
	shortTitle: 'My Portfolio',
	slug: 'portfolio',
	startDate: '2023-10-28',
	endDate: '2023-11-02',
	excerpt:
		'Complete redesign of the LA Zoo website. Built using Sage 9 Laravel Wordpress theme, Advanced Custom Fields and custom Gutenberg blocks',
	website: 'https://samrankin.dev',
};

// ========================================================================== //
// =========================== WP ReadMe Generator ========================== //
// ========================================================================== //

export const wpReadMe: IProject = {
	title: 'WP ReadMe Generator NPM Package',
	shortTitle: 'WP ReadMe Generator',
	excerpt:
		'Complete redesign of the LA Zoo website. Built using Sage 9 Laravel Wordpress theme, Advanced Custom Fields and custom Gutenberg blocks',
	slug: 'wp-readme',
	repo: 'https://github.com/snrankin/generate-wp-readme',
	website: 'https://www.npmjs.com/package/@snrankin/generate-wp-readme',
};

export const spectrum: IProject = {
	title: 'Spectrum Medical Care Center Redesign',
	shortTitle: 'Spectrum Medical',
	slug: 'spectrum',
	website: 'https://spectrummedicalcareaz.com',
};

export const midfirst: IProject = {
	title: 'MidFirst Bank Website Redesign',
	shortTitle: 'MidFirst Bank',
	slug: 'midfirst',
	website: 'https://midfirst.com',
};

export const skipro: IProject = {
	title: 'SkiPro Website Redesign',
	shortTitle: 'SkiPro',
	slug: 'skipro',
	website: 'https://skipro.com',
};

export const riester: IProject = {
	title: 'RIESTER Advertising Agency Website Redesign',
	shortTitle: 'RIESTER',
	slug: 'riester',
	website: 'https://riester.com',
};

export const ProjectsList: IProject[] = [
	portfolio,

	wpReadMe,
	midfirst,
	skipro,
	riester,
	spectrum,
];
