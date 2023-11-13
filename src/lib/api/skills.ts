import { get, groupBy, has, isSet } from 'lodash';
import { cache } from 'react';
export type ISkill = {
	title: string;
	category: string;
};

export interface ISkillsCollection {
	items: ISkill[];
}

export interface ISkills extends Object {
	Languages: ISkill[];
	Frameworks: ISkill[];
	CMS: ISkill[];
	Tools: ISkill[];
	Software: ISkill[];
}
const SKILL_GRAPHQL_FIELDS = `
  title
  category
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
			next: { tags: ['skills'] },
		}
	)
		.then((response: Response) => response.json())
		.then((response: any) => {
			if (has(response, 'errors')) {
				let errors = get(response, 'errors');

				throw new Error(
					`${errors[0].message} at src/lib/api/skills.ts:${errors[0].locations[0].line}`
				);
			}
			return response; //we only get here if there is no error
		})
		.catch((err: any) => {
			console.error(err);
		});
}

function extractItem(fetchResponse: any): ISkill {
	return fetchResponse?.data?.skillCollection?.items?.[0];
}

function extractEntries(fetchResponse: any): ISkill[] {
	return fetchResponse?.data?.skillCollection?.items;
}

export const preloadSkills = () => {
	void getAllSkills(false);
};

export const getAllSkills = cache(
	async (isDraftMode: boolean): Promise<ISkills> => {
		let entries = await fetchGraphQL(
			`query {
		      skillCollection(preview: ${isDraftMode ? 'true' : 'false'}) {
		        items {
		          ${SKILL_GRAPHQL_FIELDS}
		        }
		      }
		    }`,
			isDraftMode
		);

		entries = extractEntries(entries);

		entries = groupBy(entries, 'category');

		return entries;
	}
);

export const getSkillsGroup = cache(
	async (
		group: 'Languages' | 'Frameworks' | 'CMS' | 'Tools' | 'Software',
		isDraftMode: boolean
	): Promise<ISkill[]> => {
		const entries = await fetchGraphQL(
			`query {
		      skillCollection(where: { category: "${group}" }, preview: ${
				isDraftMode ? 'true' : 'false'
			}) {
		        items {
		          ${SKILL_GRAPHQL_FIELDS}
		        }
		      }
		    }`,
			isDraftMode
		);

		return extractEntries(entries);
	}
);
