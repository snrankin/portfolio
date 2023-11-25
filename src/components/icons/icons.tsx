'use client';
import { camelCase, lowerCase } from 'change-case-all';
import classNames from 'classnames';
import { get, isEmpty } from 'lodash';

import { StringDictionary } from '../../lib/utils';

export const WebIcons: StringDictionary = {
	calendar: 'calendar',
	close: 'close',
	compass: 'compass',
	github: 'github',
	linkedin: 'linkedin',
	mail: 'mail',
	map: 'map-pin',
	menu: 'menu',
	moon: 'moon',
	phone: 'phone',
	print: 'print',
	sun: 'sun',
	web: 'web',
	code: 'code',
	contact: 'contact',
};

export const DevIcons: StringDictionary = {
	babel: 'devicon-babel-plain',
	bitbucket: 'devicon-bitbucket-original',
	bootstrap: 'devicon-bootstrap-plain',
	composer: 'devicon-composer-line',
	'c#': 'devicon-csharp-plain',
	css: 'devicon-css3-plain',
	css3: 'devicon-css3-plain',
	contentful: 'dev-contentful',
	figma: 'dev-figma',
	git: 'devicon-git-plain',
	github: 'devicon-github-original',
	html: 'devicon-html5-plain',
	html5: 'devicon-html5-plain',
	illustrator: 'devicon-illustrator-plain',
	javascript: 'devicon-javascript-plain',
	jira: 'devicon-jira-plain',
	kentico: 'dev-kentico',
	laravel: 'devicon-laravel-plain',
	liquid: 'dev-liquid',
	net: 'devicon-dotnetcore-plain',
	nextJs: 'devicon-nextjs-original',
	nodeJs: 'devicon-nodejs-plain',
	npm: 'devicon-npm-original-wordmark',
	photoshop: 'devicon-photoshop-plain',
	postcss: 'dev-postcss',
	php: 'devicon-php-plain',
	react: 'devicon-react-original',
	sass: 'devicon-sass-original',
	sketch: 'dev-sketch',
	shopify: 'dev-shopify',
	tailwind: 'devicon-tailwindcss-plain',
	typescript: 'devicon-typescript-plain',
	umbraco: 'dev-umbraco',
	vscode: 'devicon-vscode-plain',
	webpack: 'devicon-webpack-plain',
	woocommerce: 'devicon-woocommerce-plain',
	wordpress: 'devicon-wordpress-plain',
	xd: 'devicon-xd-plain',
	yarn: 'devicon-yarn-plain',
};

export const IosIcons: StringDictionary = {
	chevronLeft: 'chevron-left',
	chevronRight: 'chevron-right',
	desktop: 'desktop',
	mobile: 'mobile',
	plus: 'plus',
	puzzle: 'puzzle',
	refresh: 'refresh',
	search: 'search',
	share: 'share',
	sidebar: 'sidebar',
	tablet: 'tablet',
	tabs: 'tabs',
	textResize: 'text-resize',
};

export function getIconName(
	iconName: string,
	groupName: 'web' | 'dev' | 'ios' | 'feather' = 'feather'
) {
	let group = WebIcons;
	if (groupName == 'dev') {
		group = DevIcons;
	}
	if (groupName == 'ios') {
		group = IosIcons;
	}
	iconName = camelCase(lowerCase(iconName));

	if (iconName == 'c') {
		iconName = 'c#';
	}

	return get(group, iconName, '');
}
export function hasIcon(
	iconName: string,
	groupName: 'web' | 'dev' | 'ios' | 'feather' = 'feather'
): boolean {
	return groupName == 'feather' || !isEmpty(getIconName(iconName, groupName));
}

export function getIcon(
	iconName: string,
	group: 'web' | 'dev' | 'ios' | 'feather' = 'feather',
	useColor?: boolean
) {
	let feather = iconName;
	iconName = getIconName(iconName, group);
	let icon = null;

	if (!isEmpty(iconName)) {
		if (group == 'dev') {
			let classes = classNames(iconName, {
				colored: useColor,
			});
			icon = <span className={classes}></span>;
		} else if (group == 'ios') {
			icon = (
				<svg style={{ width: '1em', height: '1em' }}>
					<use href={`/ios-sprite.svg#ios-${iconName} `} />
				</svg>
			);
		} else if (group == 'web') {
			icon = (
				<svg style={{ width: '1em', height: '1em' }}>
					<use href={`/web-sprite.svg#web-${iconName} `} />
				</svg>
			);
		} else {
			icon = (
				<svg
					className="feather"
					style={{ width: '1em', height: '1em' }}
				>
					<use href={`/feather-sprite.svg#${feather}`} />
				</svg>
			);
		}
	} else {
		icon = (
			<svg className="feather" style={{ width: '1em', height: '1em' }}>
				<use href={`/feather-sprite.svg#${feather}`} />
			</svg>
		);
	}
	return icon;
}
export function getIconString(
	iconName: string,
	groupName: 'web' | 'dev' | 'ios' = 'web',
	useColor?: boolean,
	classes?: string
): string {
	iconName = getIconName(iconName, groupName);

	classes = classNames('icon', classes);

	if (!isEmpty(iconName)) {
		let icon;
		let iconClasses = classNames(iconName, {
			colored: useColor,
		});
		if (groupName == 'dev') {
			icon = `<span class="${iconClasses}"></span>`;
		} else if (groupName == 'ios') {
			icon = `<svg style="width: 1em; height: 1em">
						<use href="ios-sprite.svg#ios-${iconName}" />
					</svg>`;
		} else {
			icon = `<svg class="feather" style="width: 1em; height: 1em">
						<use href="/feather-sprite.svg#${iconName}" />
					</svg>`;
		}

		return `<span aria-hidden="true" role="presentation" class="${classes}">${icon}</span>`;
	}

	return '';
}
