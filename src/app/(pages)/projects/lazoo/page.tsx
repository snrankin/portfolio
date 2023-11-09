import { IProject } from '@/app/lib/interfaces';

import { ProjectsList } from '@/app/lib/projects';
import Section from '@/app/components/section/section';
import DeviceTabs from '@/app/components/device/tabs';
import { paramCase } from 'change-case-all';
import Icon from '@/app/components/icons/icon-item';
import { find } from 'lodash';
import Content from '../content';
import Desktop from './desktop.png';
import Laptop from './laptop.png';
import Tablet from './tablet.png';
import Mobile from './mobile.png';
import { Metadata } from 'next';
export const project: IProject = {
	title: 'LA Zoo Website Redesign',
	shortTitle: 'LA Zoo Website',
	slug: 'lazoo',
	startDate: '2020-02-28',
	endDate: '2021-03-31',
	summary:
		'Complete redesign of the LA Zoo website. Built using Sage 9 Laravel Wordpress theme, Advanced Custom Fields and custom Gutenberg blocks',
	url: 'https://www.lazoo.org',
	image: Desktop,
	highlights: ['WordPress', 'Laravel', 'PHP', 'React', 'Webpack'],
	desktop: Desktop,
	laptop: Laptop,
	tablet: Tablet,
	mobile: Mobile,
	links: {
		website: 'https://www.lazoo.org',
	},
};

export const metadata: Metadata = {
	title: project.title,
	description: project.summary,
};
export default function Page() {
	return <Content project={project} useGrid={true} />;
}
