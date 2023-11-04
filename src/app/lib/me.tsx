import { IBasics } from './interfaces';

import MeColor from '@/img/me-color.jpeg';
export const Me: IBasics = {
	firstName: 'Sam',
	lastName: 'Rankin',
	label: 'Full-stack web developer',
	image: MeColor,
	email: 'samrankin.dev@gmail.com',
	phone: '480-382-4295',
	summary:
		"I'm not just about pixels and code. I'm about creating a digital space that speaks volumes while being flawlessly functional.",
	about: [
		"I've been immersed in the ever-changing landscape of the digital realm (professionally) since 2010. My journey has had me mostly focused on WordPress, but I'm confident in my ability to pick up any platform or language.",
		"I'm all about making websites feel like home—responsive, accessible, and super intuitive for every visitor. But it's not just about code; it's about creating a digital space that speaks volumes while being flawlessly functional.",
		"When I'm not diving into code, you’ll find me nose-deep in a book, spreading smiles as a therapy dog team with my corgi, Zoey, catching the excitement at Arizona Diamondbacks games, or getting my hands messy in art classes.",
	],
	location: {
		city: 'Phoenix',
		locality: 'Arizona',
		localityCode: 'AZ',
	},
	profiles: {
		github: {
			title: 'View My GitHub Profile',
			icon: 'github',
			href: 'https://github.com/snrankin',
		},
		linkedin: {
			title: 'View My LinkedIn Profile',
			icon: 'linkedin',
			href: 'https://linkedin.com/in/snrankin',
		},
		phone: {
			title: 'Call me at 480-382-4295',
			icon: 'phone',
			href: 'tel:480-382-4295',
		},
		email: {
			title: 'Email me at samrankin.dev@gmail.com',
			icon: 'mail',
			href: 'mailto:samrankin.dev@gmail.com',
		},
	},
	skills: {
		languages: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'C#'],
		frameworks: ['Bootstrap', 'Tailwind', 'React', 'Next.js', 'Laravel'],
		cms: ['WordPress', 'Shopify', 'Umbraco', 'Kentico'],
		tools: [
			'Git',
			'Node.js',
			'SASS',
			'Composer',
			'Webpack',
			'Babel',
			'PostCSS',
		],
		software: [
			'Photoshop',
			'Illustrator',
			'XD',
			'VSCode',
			'Figma',
			'GitHub',
			'Bitbucket',
			'Jira',
		],
	},
};
