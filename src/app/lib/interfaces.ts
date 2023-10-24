export type Sizes = 'xs' | 'sm' | 'md' | 'lg';

export type ColorSchemes = 'neutral' | 'primary' | 'secondary' | 'accent';

export type ColorState = 'info' | 'success' | 'warning' | 'error';
export interface Basics {
	firstName: string;
	lastName: string;
	label: string;
	image?: string;
	email?: string;
	phone?: string;
	summary?: string;
	location?: Location;
	profiles?: SocialProfile[];
}

export interface Location {
	street?: string;
	city?: string;
	locality?: string;
	localityCode?: string;
	postalCode?: string;
	countryCode?: string;
}

import { IconName } from '@fortawesome/fontawesome-common-types';

export interface SocialProfile {
	network: string;
	username?: string;
	label?: string;
	icon: IconName;
	url: string;
}

export interface Position {
	company: string;
	position: string;
	startDate: Date | string;
	endDate?: Date | string;
	highlights?: any[];
	summary?: string;
	url: string;
	location?: Location;
}

export interface Education {
	institution?: string;
	area?: string;
	studyType?: string;
	startDate?: string;
	endDate?: string;
	score?: string;
	courses?: string[];
}

export interface Skill {
	name: string;
	icon?: string;
	level?: string;
	categories?: string[];
}

export interface Language {
	language: string;
	fluency?: string;
}

export interface Project {
	name: string;
	startDate?: Date | string;
	endDate?: Date | string;
	summary?: string;
	url: string;
	repo?: string;
}

export type Resume = {
	basics: Basics;
	work: Position[];
	volunteer?: Position[];
	education?: Education[];
	awards?: any[];
	certificates?: any[];
	publications?: any[];
	skills?: Skill[];
	languages?: Language[];
	interests?: any[];
	references?: any[];
	projects?: Project[];
};
