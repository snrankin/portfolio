import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import Content from './content';
import { getItem, getItems, getItemsExcept, preloadItem } from '@/lib/api';

import {
	TypePostFields,
	POST_LINKS_GRAPHQL_FIELDS,
	POST_CARD_GRAPHQL_FIELDS,
	TypePostCardFields,
} from '@/lib/types';
export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { isEnabled } = draftMode();
	preloadItem(isEnabled, 'post', params.slug);
	let project = await getItem<TypePostFields>(isEnabled, 'post', params.slug);

	let title = project?.seoTitle ? project?.seoTitle : project?.title;
	let description = project?.seoDescription
		? project?.seoDescription
		: project?.summary;
	return {
		title: `${title} | Projects`,
		description,
	};
}

export async function generateStaticParams() {
	const projects = await getItems<TypePostFields>(
		false,
		'post',
		undefined,
		undefined,
		POST_LINKS_GRAPHQL_FIELDS
	);

	let params: any[] = [];

	if (!!projects) {
		params = projects?.map((project) => ({
			slug: project.slug,
		}));
	}
	return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { isEnabled } = draftMode();

	let project = await getItem<TypePostFields>(isEnabled, 'post', params.slug);
	const moreProjects = await getItemsExcept<TypePostCardFields>(
		isEnabled,
		'post',
		[params.slug],
		3,
		POST_CARD_GRAPHQL_FIELDS
	);

	return <Content project={project} moreProjects={moreProjects} />;
}
