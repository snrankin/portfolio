import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { AboutSection } from './TypeAboutSection';
import type { TypeAuthor } from './TypeAuthor';
import type { JobsSection } from './TypeJobsSection';
import type { ProjectsSection } from './TypeProjectsSection';
import type { SkillsSection } from './TypeSkillsSection';

export interface TypeHomePageFields {
	title?: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	author?: TypeAuthor;
	heroTitle?: EntryFields.RichText;
	heroText?: EntryFields.RichText;
	sections?: Entry<
		AboutSection | JobsSection | ProjectsSection | SkillsSection
	>[];
	seoTitle?: EntryFields.Symbol;
	seoDescription?: EntryFields.Text;
	seoImage?: Asset;
}
export interface HomePage extends EntrySkeletonType {
	fields: TypeHomePageFields;
}
export type TypeHomePage = Entry<HomePage>;
