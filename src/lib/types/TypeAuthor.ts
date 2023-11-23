import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeSocialProfile, TypeAssetFields } from '.';
import { RICHTEXT_GRAPHQL_FIELDS, ASSET_GRAPHQL_FIELDS } from '.';
export const AUTHOR_GRAPHQL_FIELDS = `
  name
  firstName
  lastName
  slug
  label
  phone
  email
  picture {
    ${ASSET_GRAPHQL_FIELDS}
  }
  location {
    lat
    lon
  }
  socialCollection {
    items {
      title
      url
    }
  }
`;

export interface TypeAuthorFields {
	name: EntryFields.Text;
	picture: Asset;
	firstName?: EntryFields.Text;
	lastName?: EntryFields.Text;
	label?: EntryFields.Text;
	email?: EntryFields.Text;
	phone?: EntryFields.Text;
	location?: EntryFields.Location;
	social?: TypeSocialProfile[];
}

export interface Author extends EntrySkeletonType {
	fields: TypeAuthorFields;
}

export type TypeAuthor = Entry<Author>;
