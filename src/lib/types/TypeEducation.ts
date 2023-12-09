import type { Entry, EntryFields, EntrySkeletonType } from 'contentful';

export const EDUCATION_GRAPHQL_FIELDS = `
  school
  degree
  field
  slug
  startDate
  endDate
  current
`;
export interface TypeEducationFields {
	school: EntryFields.Symbol;
	degree?: EntryFields.Symbol;
	field?: EntryFields.Symbol;
	startDate: string;
	endDate?: string;
	current: boolean;
	slug: EntryFields.Symbol;
}
export interface Education extends EntrySkeletonType {
	fields: TypeEducationFields;
}
export type TypeEducation = Entry<Education>;
