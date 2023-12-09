import {
	ABOUT_SECTION_GRAPHQL_FIELDS,
	AUTHOR_GRAPHQL_FIELDS,
	CTA_SECTION_GRAPHQL_FIELDS,
	EDUCATION_GRAPHQL_FIELDS,
	HOMEPAGE_GRAPHQL_FIELDS,
	JOBS_SECTION_GRAPHQL_FIELDS,
	LOCATION_GRAPHQL_FIELDS,
	POST_GRAPHQL_FIELDS,
	PROJECTS_SECTION_GRAPHQL_FIELDS,
	RESUME_GRAPHQL_FIELDS,
	SITE_GRAPHQL_FIELDS,
	SKILLS_SECTION_GRAPHQL_FIELDS,
	VOLUNTEER_GRAPHQL_FIELDS,
} from './';

export enum ContentTypes {
	post = POST_GRAPHQL_FIELDS,
	site = SITE_GRAPHQL_FIELDS,
	author = AUTHOR_GRAPHQL_FIELDS,
	homePage = HOMEPAGE_GRAPHQL_FIELDS,
	resumePage = RESUME_GRAPHQL_FIELDS,
	aboutSection = ABOUT_SECTION_GRAPHQL_FIELDS,
	skillsSection = SKILLS_SECTION_GRAPHQL_FIELDS,
	projectsSection = PROJECTS_SECTION_GRAPHQL_FIELDS,
	jobsSection = JOBS_SECTION_GRAPHQL_FIELDS,
	cta = CTA_SECTION_GRAPHQL_FIELDS,
	volunteer = VOLUNTEER_GRAPHQL_FIELDS,
	education = EDUCATION_GRAPHQL_FIELDS,
	location = LOCATION_GRAPHQL_FIELDS,
}
