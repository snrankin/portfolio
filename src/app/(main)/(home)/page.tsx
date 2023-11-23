import { draftMode } from 'next/headers';
import Test from './test';
import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import WorkHistory from './work-history';
import { getItem } from '@/lib/api';
import type { Metadata } from 'next';
import { set } from 'lodash';
import {
	TypeAuthorFields,
	TypeHomePageFields,
	TypeAboutSectionFields,
	TypeJobsSectionFields,
	TypeProjectsSectionFields,
	TypeSkillsSectionFields,
} from '@/lib/types';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { isEnabled } = draftMode();
	const page = await getItem<TypeHomePageFields>(
		isEnabled,
		'homePage',
		'home'
	);

	let title = page?.seoTitle ? page?.seoTitle : page?.title;
	let description = page?.seoDescription;

	const meta = {
		title: `${title} | Projects`,
		description,
		openGraph: {
			title: `${title} | Projects`,
			description,
			url: process.env.VERCEL_CUSTOM_DOMAIN,
			siteName: process.env.VERCEL_SEO_SITE_NAME,
			locale: 'en_US',
			type: 'website',
		},
	};

	if (!!page?.seoImage) {
		set(meta, 'openGraph.images[0]', {
			url: page?.seoImage?.url,
			width: page?.seoImage?.width,
			height: page?.seoImage?.height,
			alt: page?.seoImage?.description,
		});
	}
	return meta;
}

export default async function Page() {
	const { isEnabled } = draftMode();

	const page = await getItem<TypeHomePageFields>(
		isEnabled,
		'homePage',
		'home'
	);
	const me = await getItem<TypeAuthorFields>(
		isEnabled,
		'author',
		'sam-rankin'
	);
	const about = await getItem<TypeAboutSectionFields>(
		isEnabled,
		'aboutSection',
		'about'
	);

	const skills = await getItem<TypeSkillsSectionFields>(
		isEnabled,
		'skillsSection',
		'skills'
	);

	const projects = await getItem<TypeProjectsSectionFields>(
		isEnabled,
		'projectsSection',
		'projects'
	);

	const jobs = await getItem<TypeJobsSectionFields>(
		isEnabled,
		'jobsSection',
		'work-history'
	);

	return (
		<>
			<Hero me={me} home={page} />
			{!!about && <About {...about} />}

			{!!skills && <Skills {...skills} />}
			{!!projects && <Projects {...projects} />}
			{!!jobs && <WorkHistory {...jobs} />}
		</>
	);
}
