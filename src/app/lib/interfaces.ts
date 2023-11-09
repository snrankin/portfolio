import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { HTMLProps } from 'react';
export type Sizes = 'xs' | 'sm' | 'md' | 'lg';

export type ColorSchemes = 'neutral' | 'primary' | 'secondary' | 'accent';

export type ColorState = 'info' | 'success' | 'warning' | 'error';

export interface Dictionary extends Object {
	[key: string]: any;
}
export interface StringDictionary {
	[key: string]: string;
}

export interface IBasics extends Object {
	firstName: string;
	lastName: string;
	label: string;
	image?: string | StaticImport;
	email?: string;
	phone?: string;
	summary?: string;
	about?: string[];
	location?: ILocation;
	profiles?: ISocialProfiles;
	skills?: ISkillsGroups;
}

export interface ILocation extends Object {
	street?: string;
	city?: string;
	locality?: string;
	localityCode?: string;
	postalCode?: string;
	countryCode?: string;
}

export interface ISocialProfiles {
	[key: string]: ISocialProfile;
}
export interface ISocialProfile extends Object {
	network?: string;
	username?: string;
	title?: string;
	icon: string;
	href: string;
}

export interface IPosition extends Object {
	company: string;
	position: string;
	startDate: Date | string;
	endDate?: Date | string;
	highlights?: any[];
	summary?: string;
	url: string;
	location?: ILocation;
}

export interface IEducation extends Object {
	institution?: string;
	area?: string;
	studyType?: string;
	startDate?: string;
	endDate?: string;
	score?: string;
	courses?: string[];
}

export interface ISkillsGroups {
	languages?: string[];
	frameworks?: string[];
	cms?: string[];
	tools?: string[];
	software?: string[];
}

export interface IProjectLinks extends Object {
	github?: string;
	npm?: string;
	bitbucket?: string;
	website?: string;
}
export interface IProject extends Object {
	title?: string;
	shortTitle?: string;
	slug?: string;
	startDate?: string | Date;
	endDate?: string | Date;
	summary?: string;
	url?: string;
	repo?: string;
	image?: StaticImport;
	highlights?: string[];
	desktop?: StaticImport;
	laptop?: StaticImport;
	tablet?: StaticImport;
	mobile?: StaticImport;
	links?: IProjectLinks;
}

export type Resume = {
	basics: IBasics;
	work: IPosition[];
	volunteer?: IPosition[];
	education?: IEducation[];
	awards?: any[];
	certificates?: any[];
	publications?: any[];
	interests?: any[];
	references?: any[];
	projects?: IProject[];
};
