import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

export const LOCATION_GRAPHQL_FIELDS = `
  title
  slug
  street
  city
  state
  postal
  location {
    lat
    lon
  }
`;
export interface TypeLocationFields {
	title?: EntryFields.Symbol;
	street?: EntryFields.Symbol;
	city?: EntryFields.Symbol;
	state?: EntryFields.Symbol;
	postal?: EntryFields.Symbol;
	location?: EntryFields.Location;
	slug?: EntryFields.Symbol;
}
export interface Location extends EntrySkeletonType {
	fields: TypeLocationFields;
}
export type TypeLocation = Entry<Location>;
