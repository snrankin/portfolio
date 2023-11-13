import { get, has, isString } from 'lodash';
import { Asset, Content } from '@/components/contentful/markdown';
import { ISkillsCollection } from './skills';
export interface IProject extends Object {
	title?: string;
	shortTitle?: string;
	slug?: string;
	startDate?: string | Date;
	endDate?: string | Date;
	excerpt?: string;
	website?: string;
	repo?: string;
	featuredImage?: Asset;
	desktopPreview?: Asset;
	laptopPreview?: Asset;
	tabletPreview?: Asset;
	mobilePreview?: Asset;
	content?: Content;
	skillCollection?: ISkillsCollection;
}
const PROJECT_GRAPHQL_FIELDS = `
  slug
  title
  shortTitle
  featuredImage {
    title
    url
    description
    width
    height
  }
  startDate
  endDate
  website
  repo
  desktopPreview {
    title
    url
    description
    width
    height
  }
  laptopPreview {
    title
    url
    description
    width
    height
  }
  tabletPreview {
    title
    url
    description
    width
    height
  }
  mobilePreview {
    title
    url
    description
    width
    height
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          title
	      url
	      description
	      width
	      height
        }
      }
    }
  }
  skillCollection {
    items {
      title,
      category
    }
  }
`;

const PROJECT_CARD_GRAPHQL_FIELDS = `
  slug
  shortTitle
  excerpt
  website
  repo
  skillCollection {
    items {
      title
      category
    }
  }
`;

const PROJECT_RESUME_GRAPHQL_FIELDS = `
  slug
  shortTitle
  excerpt
  skillCollection {
    items {
      title
      category
    }
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
	return await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query }),
			next: { tags: ['projects'] },
		}
	)
		.then((response: Response) => response.json())
		.then((response: any) => {
			if (has(response, 'errors')) {
				let errors = get(response, 'errors');

				throw new Error(
					`${errors[0].message} at src/lib/api/project.ts:${errors[0].locations[0].line}`
				);
			}
			return response; //we only get here if there is no error
		})
		.catch((err: any) => {
			console.error(err);
		});
}

function extractItem(fetchResponse: any): IProject {
	return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractEntries(fetchResponse: any): IProject[] {
	return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewProjectBySlug(
	slug: string | null
): Promise<any> {
	const entry = await fetchGraphQL(
		`query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
		true
	);
	return extractItem(entry);
}
export async function getAllProjects(
	isDraftMode: boolean
): Promise<IProject[]> {
	const entries = await fetchGraphQL(
		`query {
		      postCollection(where: { slug_exists: true }, preview: ${
					isDraftMode ? 'true' : 'false'
				}) {
		        items {
		          ${PROJECT_CARD_GRAPHQL_FIELDS}
		        }
		      }
		    }`,
		isDraftMode
	);

	return extractEntries(entries);
}

export async function getProjects(
	projects: string | string[],
	isDraftMode: boolean
): Promise<IProject[]> {
	projects = isString(projects) ? projects.split(',') : projects;

	projects = projects.map((slug) => `"${slug.trim()}"`);

	projects.join(',');

	let entries = await fetchGraphQL(
		`query {
		      postCollection(where: { slug_in: [${projects}] }, preview: ${
			isDraftMode ? 'true' : 'false'
		}) {
		        items {
		          ${PROJECT_CARD_GRAPHQL_FIELDS}
		        }
		      }
		    }`,
		isDraftMode
	);

	entries = extractEntries(entries);

	console.log('🚀 ~ file: projects.ts:216 ~ entries:', entries);

	return entries;
}

export async function getProjectAndMoreProjects(
	slug: string,
	preview: boolean
): Promise<any> {
	const entry = await fetchGraphQL(
		`query {
      postCollection(where: { slug: "${slug}" }, preview: ${
			preview ? 'true' : 'false'
		}, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
		preview
	);

	const entries = await fetchGraphQL(
		`query {
      postCollection(where: { slug_not_in: "${slug}" }, preview: ${
			preview ? 'true' : 'false'
		}, limit: 3) {
        items {
          ${PROJECT_CARD_GRAPHQL_FIELDS}
        }
      }
    }`,
		preview
	);

	return {
		project: extractItem(entry),
		moreProjects: extractEntries(entries),
	};
}
