export const RICHTEXT_GRAPHQL_FIELDS = `
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
`;

export const ASSET_GRAPHQL_FIELDS = `
  title
  url(transform: {
    format: WEBP,
    quality: 90
  })
description
width
height
`;
export const SKILL_GRAPHQL_FIELDS = `
  title
  category
`;

export const desktopRatio = 0.565400859375;
export const laptopRatio = 0.644636625;
export const tabletRatio = 0.10888671875;
export const mobileRatio = 0.2137404833333;

export function deviceImageHeight(
	width: number,
	device: 'desktop' | 'laptop' | 'tablet' | 'mobile'
) {
	let height;

	switch (device) {
		case 'desktop':
			height = width * desktopRatio;
			break;

		case 'laptop':
			height = width * laptopRatio;
			break;
		case 'tablet':
			height = width * tabletRatio;
			break;
		case 'mobile':
			height = width * mobileRatio;
			break;
	}

	return Math.ceil(height);
}

function deviceImage(
	width: number,
	device: 'desktop' | 'laptop' | 'tablet' | 'mobile'
) {
	let height = deviceImageHeight(width, device);

	return `
  width: ${width},
  height: ${Math.ceil(height)},
  resizeStrategy: FILL,
  resizeFocus: TOP,
`;
}

export const POST_GRAPHQL_FIELDS = `
  slug
  title
  shortTitle
  featuredImage {
    ${ASSET_GRAPHQL_FIELDS}
  }
  startDate
  endDate
  website
  repo
  desktopPreview {
    ${ASSET_GRAPHQL_FIELDS}
  }
  laptopPreview {
    ${ASSET_GRAPHQL_FIELDS}
  }
  tabletPreview {
    ${ASSET_GRAPHQL_FIELDS}
  }
  mobilePreview {
    ${ASSET_GRAPHQL_FIELDS}
  }
  summary
  content {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  skillCollection {
    items {
      ${SKILL_GRAPHQL_FIELDS}
    }
  }
`;

export const POST_CARD_GRAPHQL_FIELDS = `
  slug
  shortTitle
  summary
  skillCollection (limit: 4){
    items {
      ${SKILL_GRAPHQL_FIELDS}
    }
  }
`;
export const POST_LINKS_GRAPHQL_FIELDS = `
  slug
  shortTitle
`;

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

export const HOMEPAGE_GRAPHQL_FIELDS = `
  sys {
    publishedAt
    firstPublishedAt
  }
  __typename
  title
  slug
  author {
    name
    firstName
    lastName
    slug
    label
  }
  heroText {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  seoTitle
  seoDescription
  seoImage {
    ${ASSET_GRAPHQL_FIELDS}
  }
`;

export const RESUME_GRAPHQL_FIELDS = `
  sys {
    publishedAt
    firstPublishedAt
  }
  __typename
  title
  slug
  summary
  author {
    name
    firstName
    lastName
    slug
    label
  }
  projectsCollection {
	  items {
	    slug
	    shortTitle
	    website
      repo
	  }
  }
  seoTitle
  seoDescription
  seoImage {
    ${ASSET_GRAPHQL_FIELDS}
  }
`;

export const ABOUT_SECTION_GRAPHQL_FIELDS = `
  sys {
  id
  }
  __typename
  title
  slug
  command
  argument
  flags
  content {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  image {
    ${ASSET_GRAPHQL_FIELDS}
  }
`;
export const SKILLS_SECTION_GRAPHQL_FIELDS = `
  sys {
    id
  }
  __typename
  title
  slug
  command
  argument
  flags
  intro {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  skillsCollection {
	  items {
	    ${SKILL_GRAPHQL_FIELDS}
	  }
  }
`;

export const PROJECTS_SECTION_GRAPHQL_FIELDS = `
  sys {
  id
  }
  __typename
  title
  slug
  command
  argument
  flags
  intro {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  projectsCollection {
	  items {
	    ${POST_CARD_GRAPHQL_FIELDS}
	  }
  }
`;

export const JOB_GRAPHQL_FIELDS = `
  title
  company
  startDate
  endDate
  website
  description {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
`;

export const JOBS_SECTION_GRAPHQL_FIELDS = `
  sys {
  id
  }
  __typename
  title
  slug
  command
  argument
  flags
  intro {
    ${RICHTEXT_GRAPHQL_FIELDS}
  }
  jobsCollection (where: { startDate_exists: true }, order: startDate_DESC) {
	  items {
	    ${JOB_GRAPHQL_FIELDS}
	  }
  }
`;

export enum ContentTypes {
	post = POST_GRAPHQL_FIELDS,
	author = AUTHOR_GRAPHQL_FIELDS,
	homePage = HOMEPAGE_GRAPHQL_FIELDS,
	resumePage = RESUME_GRAPHQL_FIELDS,
	jobsSection = JOBS_SECTION_GRAPHQL_FIELDS,
	skillsSection = SKILLS_SECTION_GRAPHQL_FIELDS,
	projectsSection = PROJECTS_SECTION_GRAPHQL_FIELDS,
	aboutSection = ABOUT_SECTION_GRAPHQL_FIELDS,
}
