import { IProject } from '@/app/lib/interfaces';

import { ProjectsList } from '@/app/lib/projects';
import Section from '@/app/components/section/section';
import DeviceTabs from '@/app/components/device-tabs/device-tabs';
import { paramCase } from 'change-case-all';
import Icon from '@/app/components/icons/icon';
import { find } from 'lodash';
import Content from './content';
export async function generateStaticParams() {
	return ProjectsList.map((post) => ({
		slug: post.slug,
	}));
}
export default function Page({ params }: { params: { slug: string } }) {
	let project = find(ProjectsList, ['slug', params.slug]);
	return <>{project != undefined ? <Content project={project} /> : null}</>;
}
