import { get, has, isArray, isString } from 'lodash';
import { cache } from 'react';
import { ContentTypes } from '@/lib/types';

type ContentKeys = keyof typeof ContentTypes;

async function fetchGraphQL(
	query: string,
	type: string,
	preview = false
): Promise<any> {
	// console.log('🚀 ~ file: index.ts:135 ~ query:', query);

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
			next: { tags: [type] },
		}
	)
		.then((response: Response) => response.json())
		.then((response: any) => {
			if (has(response, 'errors')) {
				let errors = get(response, 'errors');

				throw new Error(
					`${errors[0].message} at src/lib/api/index.ts:${errors[0].locations[0].line}`
				);
			}
			return response; //we only get here if there is no error
		})
		.catch((err: any) => {
			console.error(err);
		});
}

function extractEntries<T>(fetchResponse: any, type: string): T[] | undefined {
	let items = get(fetchResponse, `data.${type}Collection.items`);
	return items;
}

function extractEntry<T>(fetchResponse: any, type: string): T | undefined {
	let items = extractEntries<T>(fetchResponse, type);
	let item;

	if (isArray(items)) {
		item = items[0];
	}
	return item;
}
export const preloadItem = <T>(
	isDraftMode: boolean,
	type: ContentKeys,
	slug: string
) => {
	void getItem<T>(isDraftMode, type, slug);
};

export const getItem = cache(
	async <T>(
		isDraftMode: boolean,
		type: ContentKeys,
		slug: string,
		queryFields?: string
	): Promise<T | undefined> => {
		let fields = !!queryFields ? queryFields : ContentTypes[type];
		let entries = await fetchGraphQL(
			`query {
		      ${type}Collection(where: { slug: "${slug}" }, preview: ${
				isDraftMode ? 'true' : 'false'
			}, limit: 1) {
		        items {
		          ${fields}
		        }
		      }
		    }`,
			type,
			isDraftMode
		);

		entries = extractEntry<T>(entries, type);

		return entries;
	}
);

export const getItems = cache(
	async <T>(
		isDraftMode: boolean,
		type: ContentKeys,
		items?: string | string[],
		limit?: number,
		queryFields?: string
	): Promise<T[] | undefined> => {
		let fields = !!queryFields ? queryFields : ContentTypes[type];
		let itemsArg = '';

		if (!!items) {
			items = isString(items) ? items.split(',') : items;

			items = items.map((slug) => `"${slug.trim()}"`);

			itemsArg = `, slug_in: [${items.join(',')}]`;
		}

		let limitArg = !!limit ? `, limit: ${limit}` : '';

		let query = `query {
		      ${type}Collection(where: { slug_exists: true${itemsArg} }, preview: ${
			isDraftMode ? 'true' : 'false'
		}${limitArg}) {
		        items {
		          ${fields}
		        }
		      }
		    }`;

		let entries = await fetchGraphQL(query, type, isDraftMode);

		entries = extractEntries<T>(entries, type);

		return entries;
	}
);

export const getItemsExcept = cache(
	async <T>(
		isDraftMode: boolean,
		type: ContentKeys,
		items?: string | string[],
		limit?: number,
		queryFields?: string
	): Promise<T[] | undefined> => {
		let fields = !!queryFields ? queryFields : ContentTypes[type];
		let itemsArg = '';

		if (!!items) {
			items = isString(items) ? items.split(',') : items;

			items = items.map((slug) => `"${slug.trim()}"`);

			itemsArg = `, slug_not_in: [${items.join(',')}]`;
		}

		let limitArg = !!limit ? `, limit: ${limit}` : '';

		let entries = await fetchGraphQL(
			`query {
		      ${type}Collection(where: { slug_exists: true${itemsArg} }, preview: ${
				isDraftMode ? 'true' : 'false'
			}${limitArg}) {
		        items {
		          ${fields}
		        }
		      }
		    }`,
			type,
			isDraftMode
		);

		entries = extractEntries<T>(entries, type);

		return entries;
	}
);
