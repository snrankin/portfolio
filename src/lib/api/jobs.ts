import { get, has, isSet } from 'lodash';
import { Asset, Content } from '@/components/contentful/markdown';
export interface IJob extends Object {
	title: string;
	company: string;
	startDate: string | Date;
	endDate?: string | Date;
	website?: string;
	description: Content;
}
const JOB_GRAPHQL_FIELDS = `
  title
  company
  startDate
  endDate
  website
  description {
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
			next: { tags: ['jobs'] },
		}
	)
		.then((response: Response) => response.json())
		.then((response: any) => {
			if (has(response, 'errors')) {
				let errors = get(response, 'errors');

				throw new Error(
					`${errors[0].message} at src/lib/api/jobs.ts:${errors[0].locations[0].line}`
				);
			}
			return response; //we only get here if there is no error
		})
		.catch((err: any) => {
			console.error(err);
		});
}

function extractItem(fetchResponse: any): IJob {
	return fetchResponse?.data?.jobCollection?.items?.[0];
}

function extractEntries(fetchResponse: any): IJob[] {
	return fetchResponse?.data?.jobCollection?.items;
}

export async function getAllJobs(isDraftMode: boolean): Promise<IJob[]> {
	const entries = await fetchGraphQL(
		`query {
		      jobCollection(where: { startDate_exists: true }, order: startDate_DESC, preview: ${
					isDraftMode ? 'true' : 'false'
				}) {
		        items {
		          ${JOB_GRAPHQL_FIELDS}
		        }
		      }
		    }`,
		isDraftMode
	);

	return extractEntries(entries);
}
