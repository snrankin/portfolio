import { get, has, isEmpty, startsWith } from 'lodash';
import classNames from 'classnames';
import { camelCase, lowerCase } from 'change-case-all';
import { StringDictionary } from './utils';

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
};

export const DevIcons: StringDictionary = {
	babel: 'devicon-babel-plain colored',
	bitbucket: 'devicon-bitbucket-original color',
	bootstrap: 'devicon-bootstrap-plain color',
	composer: 'devicon-composer-line colored',
	'c#': 'devicon-csharp-plain colored',
	css: 'devicon-css3-plain colored',
	css3: 'devicon-css3-plain colored',
	figma: 'figma',
	git: 'devicon-git-plain colored',
	github: 'devicon-github-original colored',
	html: 'devicon-html5-plain colored',
	html5: 'devicon-html5-plain colored',
	illustrator: 'devicon-illustrator-plain color',
	javascript: 'devicon-javascript-plain colored',
	jira: 'devicon-jira-plain colored',
	kentico: 'kentico',
	laravel: 'devicon-laravel-plain colored',
	nextJs: 'devicon-nextjs-original colored',
	nodeJs: 'devicon-nodejs-plain colored',
	npm: 'devicon-npm-original-wordmark colored',
	photoshop: 'devicon-photoshop-plain color',
	postcss: 'postcss',
	php: 'devicon-php-plain colored',
	react: 'devicon-react-original colored',
	sass: 'devicon-sass-original colored',
	shopify: 'shopify',
	tailwind: 'devicon-tailwindcss-plain colored',
	typescript: 'devicon-typescript-plain colored',
	umbraco: 'umbraco',
	vscode: 'devicon-vscode-plain colored',
	webpack: 'devicon-webpack-plain colored',
	woocommerce: 'devicon-woocommerce-plain colored',
	wordpress: 'devicon-wordpress-plain colored',
	xd: 'devicon-xd-plain color',
	yarn: 'devicon-yarn-plain colored',
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
	groupName: 'web' | 'dev' | 'ios' = 'web'
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
	groupName: 'web' | 'dev' | 'ios' = 'web'
): boolean {
	return !isEmpty(getIconName(iconName, groupName));
}

export function getIcon(
	iconName: string,
	group: 'web' | 'dev' | 'ios' = 'web'
) {
	iconName = getIconName(iconName, group);
	let icon = null;

	if (!isEmpty(iconName)) {
		if (group == 'dev') {
			if (startsWith(iconName, 'dev')) {
				icon = <span className={iconName}></span>;
			} else {
				icon = (
					<svg style={{ width: '1em', height: '1em' }}>
						<use href={`/dev-sprite.svg#dev-${iconName} `} />
					</svg>
				);
			}
		} else if (group == 'ios') {
			icon = (
				<svg style={{ width: '1em', height: '1em' }}>
					<use href={`/ios-sprite.svg#ios-${iconName} `} />
				</svg>
			);
		} else {
			icon = (
				<svg style={{ width: '1em', height: '1em' }}>
					<use href={`/web-sprite.svg#web-${iconName}`} />
				</svg>
			);
		}
	}
	return icon;
}
export function getIconString(
	iconName: string,
	groupName: 'web' | 'dev' | 'ios' = 'web',
	classes?: string
): string {
	if (hasIcon(iconName, groupName)) {
		iconName = getIconName(iconName, groupName);

		classes = classNames('icon', classes);

		if (!isEmpty(iconName)) {
			let icon;
			if (groupName == 'dev') {
				if (startsWith(iconName, 'dev')) {
					icon = `<span class="${iconName}"></span>`;
				} else {
					icon = `<svg style="width: 1em; height: 1em">
						<use href="dev-sprite.svg#dev-${iconName}" />
					</svg>`;
				}
			} else if (groupName == 'ios') {
				icon = `<svg style="width: 1em; height: 1em">
						<use href="ios-sprite.svg#ios-${iconName}" />
					</svg>`;
			} else {
				icon = `<svg style="width: 1em; height: 1em">
						<use href="web-sprite.svg#web-${iconName}" />
					</svg>`;
			}

			return `<span aria-hidden="true" role="presentation" class="${classes}">${icon}</span>`;
		}
	}
	return '';
}
