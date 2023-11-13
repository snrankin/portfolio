import { get, has, isSet } from 'lodash';
import { Asset, Content } from '@/components/contentful/markdown';
import { cache } from 'react';
export interface IAuthor extends Object {
	name: string;
	firstName?: string;
	lastName?: string;
	label?: string;
	phone?: string;
	email?: string;
	picture?: Asset;
	location?: {
		lat: number;
		lon: number;
	};
	description?: string;
	about?: Content;
	heroText?: string;
	skillsText?: string;
	projectsText?: string;
	socialCollection?: {
		items: {
			title: string;
			url: string;
		}[];
	};
}
const AUTHOR_GRAPHQL_FIELDS = `
  name
  firstName
  lastName
  label
  phone
  email
  picture {
    title
    url
    description
    width
    height
  }
  location {
	lat
	lon
  }
  description
  about {
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
  heroText
  skillsText
  projectsText
  socialCollection {
    items {
      title,
      url
    }
  }
`;
async function fetchGraphQL(query: string, preview = false) {
	const res = await fetch(
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
			next: { tags: ['authors'] },
		}
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

function extractEntry(fetchResponse: any): IAuthor {
	return fetchResponse?.data?.authorCollection?.items?.[0];
}

function extractEntries(fetchResponse: any): IAuthor[] {
	return fetchResponse?.data?.authorCollection?.items;
}
export const preloadAuthor = (name: string) => {
	void getAuthor(name, false);
};
export const getAuthor = cache(
	async (name: string, isDraftMode: boolean): Promise<IAuthor> => {
		const entry = await fetchGraphQL(
			`query {
		      authorCollection(where: { name: "${name}" }, limit: 1, preview: ${
				isDraftMode ? 'true' : 'false'
			}) {
		        items {
		          ${AUTHOR_GRAPHQL_FIELDS}
		        }
		      }
		    }`,
			isDraftMode
		);

		console.log('🚀 ~ file: authors.ts:124 ~ entry:', entry);

		return extractEntry(entry);
	}
);

export async function getAllAuthors(isDraftMode: boolean): Promise<IAuthor[]> {
	const entries = await fetchGraphQL(
		`query {
		      authorCollection(where: { startDate_exists: true }, order: startDate_DESC, preview: ${
					isDraftMode ? 'true' : 'false'
				}) {
		        items {
		          ${AUTHOR_GRAPHQL_FIELDS}
		        }
		      }
		    }`,
		isDraftMode
	);

	return extractEntries(entries);
}
