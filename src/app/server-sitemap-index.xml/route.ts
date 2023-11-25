// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap';
import { getItem } from '@/lib/api';
import {
	PROJECTS_SITEMAP_GRAPHQL_FIELDS,
	TypeSiteFields,
	TypeSitemapFields,
} from '@/lib/types';
import { get } from 'lodash';
export async function GET(request: Request) {
	// Method to source urls from cms
	// const urls = await fetch('https//example.com/api')
	let site = await getItem<TypeSiteFields>(
		true,
		'site',
		'sam-rankin',
		PROJECTS_SITEMAP_GRAPHQL_FIELDS
	);
	let projects: TypeSitemapFields[] = get(
		site,
		'projectsCollection.items',
		[]
	);

	let links = projects.map((p) => {
		return {
			loc: `${process.env.VERCEL_CUSTOM_DOMAIN}/projects/${p.slug}`,
			lastmod: new Date(p.sys.publishedAt).toISOString(),
			// changefreq
			// priority
		};
	});

	return getServerSideSitemap(links);
}
