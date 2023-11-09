import { IProject } from './interfaces';
import { project as lazoo } from '@/app/(pages)/projects/lazoo/page';
export const portfolio: IProject = {
	title: "Sam Rankin's Developer Portfolio",
	shortTitle: 'My Portfolio',
	slug: 'portfolio',
	startDate: '2023-10-28',
	endDate: '2023-11-02',
	summary:
		'Complete redesign of the LA Zoo website. Built using Sage 9 Laravel Wordpress theme, Advanced Custom Fields and custom Gutenberg blocks',
	url: 'https://samrankin.dev',

	highlights: ['Next.JS', 'React', 'Tailwind'],
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
	highlights: ['TypeScript', 'Node.JS', 'JavaScript', 'NPM'],
	links: {
		github: 'https://github.com/snrankin/generate-wp-readme',
		npm: 'https://www.npmjs.com/package/@snrankin/generate-wp-readme',
	},
};

export const spectrum: IProject = {
	title: 'Spectrum Medical Care Center Redesign',
	shortTitle: 'Spectrum Medical',
	slug: 'spectrum',
	url: 'https://spectrummedicalcareaz.com',
	highlights: ['TypeScript', 'NodeJS', 'WordPress', 'JavaScript'],
	links: {
		website: 'https://spectrummedicalcareaz.com',
	},
};

export const midfirst: IProject = {
	title: 'MidFirst Bank Website Redesign',
	shortTitle: 'MidFirst Bank',
	slug: 'midfirst',
	url: 'https://midfirst.com',
	highlights: ['Handlebars.JS', 'Kentico', 'C#', 'JavaScript'],
	links: {
		website: 'https://midfirst.com',
	},
};

export const skipro: IProject = {
	title: 'SkiPro Website Redesign',
	shortTitle: 'SkiPro',
	slug: 'skipro',
	url: 'https://skipro.com',
	highlights: ['Shopify', 'Liquid', 'JavaScript'],
	links: {
		website: 'https://skipro.com',
	},
};

export const riester: IProject = {
	title: 'RIESTER Advertising Agency Website Redesign',
	shortTitle: 'RIESTER',
	slug: 'riester',
	url: 'https://riester.com',
	highlights: ['WordPress', 'PHP', 'JavaScript'],
	links: {
		website: 'https://riester.com',
	},
};

export const ProjectsList: IProject[] = [
	portfolio,
	lazoo,
	wpReadMe,
	midfirst,
	skipro,
	riester,
	spectrum,
];
