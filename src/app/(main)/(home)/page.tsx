import { set } from 'lodash';
import { draftMode } from 'next/headers';

import { getItem } from '@/lib/api';
import {
	TypeAboutSectionFields,
	TypeAuthorFields,
	TypeCtaSectionFields,
	TypeHomePageFields,
	TypeJobsSectionFields,
	TypeProjectsSectionFields,
	TypeSiteFields,
	TypeSkillsSectionFields,
} from '@/lib/types';

import About from './about';
import Cta from './cta';
import Hero from './hero';
import Projects from './projects';
import Skills from './skills';
import WorkHistory from './work-history';

import type { Metadata } from 'next';
export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { isEnabled } = draftMode();
	let site = await getItem<TypeSiteFields>(isEnabled, 'site', 'sam-rankin');
	const page = await getItem<TypeHomePageFields>(
		isEnabled,
		'homePage',
		'home'
	);

	let title = page?.seoTitle ? page?.seoTitle : page?.title;
	let description = page?.seoDescription;

	let url = site?.url ?? process.env.VERCEL_CUSTOM_DOMAIN;
	const meta = {
		title: `${title}`,
		description,
		openGraph: {
			title: `${title}`,
			description,
			url: url,
			siteName: site?.seoTitle ?? process.env.VERCEL_SEO_SITE_NAME,
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

	const cta = await getItem<TypeCtaSectionFields>(
		isEnabled,
		'cta',
		'home-cta'
	);

	return (
		<>
			<Hero me={me} home={page} />
			{!!about && <About {...about} />}
			{!!skills && <Skills {...skills} />}
			{!!projects && <Projects {...projects} />}
			{!!jobs && <WorkHistory {...jobs} />}
			{!!cta && <Cta {...cta} />}
		</>
	);
}
