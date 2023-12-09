import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

export const VOLUNTEER_GRAPHQL_FIELDS = `
  organization
  role
  slug
  startDate
  endDate
  current
`;
export interface TypeVolunteerFields {
	organization: EntryFields.Symbol;
	role: EntryFields.Symbol;
	startDate: string;
	endDate?: string;
	current: boolean;
	slug: EntryFields.Symbol;
}
export interface Volunteer extends EntrySkeletonType {
	fields: TypeVolunteerFields;
}
export type TypeVolunteer = Entry<Volunteer>;
