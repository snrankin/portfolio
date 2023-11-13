'use client';
import { get, has, isEmpty, startsWith } from 'lodash';
import classNames from 'classnames';
import { camelCase, lowerCase } from 'change-case-all';
import { StringDictionary } from '../../lib/utils';

import figma from '@/img/icons/dev/figma.svg';
import kentico from '@/img/icons/dev/kentico.svg';
import postcss from '@/img/icons/dev/postcss.svg';
import shopify from '@/img/icons/dev/shopify.svg';
import umbraco from '@/img/icons/dev/umbraco.svg';

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
};

export const DevIcons: StringDictionary = {
	babel: 'devicon-babel-plain text-[#E0BE34] dark:text-[#f9dc3e]',
	bitbucket: 'devicon-bitbucket-original color',
	bootstrap: 'devicon-bootstrap-plain color dark:text-[#AB68F7]',
	composer: 'devicon-composer-line colored dark:text-current',
	'c#': 'devicon-csharp-plain colored dark:text-[#9550A3]',
	css: 'devicon-css3-plain colored',
	css3: 'devicon-css3-plain colored',
	contentful: 'contentful',
	figma: 'figma',
	git: 'devicon-git-plain colored',
	github: 'devicon-github-original colored dark:text-current',
	html: 'devicon-html5-plain colored',
	html5: 'devicon-html5-plain colored',
	illustrator: 'devicon-illustrator-plain color',
	javascript: 'devicon-javascript-plain text-[#D9BD41] dark:text-[#f0db4f] ',
	jira: 'devicon-jira-plain colored',
	kentico: 'kentico',
	laravel: 'devicon-laravel-plain colored',
	liquid: 'liquid',
	net: 'devicon-dotnetcore-plain colored',
	nextJs: 'devicon-nextjs-original colored dark:text-current',
	nodeJs: 'devicon-nodejs-plain colored',
	npm: 'devicon-npm-original-wordmark colored',
	photoshop: 'devicon-photoshop-plain color',
	postcss: 'postcss',
	php: 'devicon-php-plain colored',
	react: 'devicon-react-original colored',
	sass: 'devicon-sass-original colored',
	sketch: 'sketch',
	shopify: 'shopify',
	tailwind: 'devicon-tailwindcss-plain colored',
	typescript: 'devicon-typescript-plain colored',
	umbraco: 'umbraco',
	vscode: 'devicon-vscode-plain colored',
	webpack: 'devicon-webpack-plain colored',
	woocommerce: 'devicon-woocommerce-plain colored',
	wordpress: 'devicon-wordpress-plain colored dark:text-current',
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
				if (iconName == 'figma') {
					icon = (
						<span className="dev-figma">
							<span className="path1"></span>
							<span className="path2"></span>
							<span className="path3"></span>
							<span className="path4"></span>
							<span className="path5"></span>
						</span>
					);
				} else if (iconName == 'contentful') {
					icon = (
						<span className="dev-contentful">
							<span className="path1"></span>
							<span className="path2"></span>
							<span className="path3"></span>
							<span className="path4"></span>
							<span className="path5"></span>
						</span>
					);
				} else {
					icon = <span className={`dev-${iconName}`}></span>;
				}
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
					if (iconName == 'figma') {
						icon = `
							<span class="dev-${iconName}">
								<span class="path1"></span>
								<span class="path2"></span>
								<span class="path3"></span>
								<span class="path4"></span>
								<span class="path5"></span>
							</span>`;
					} else if (iconName == 'contentful') {
						icon = `
							<span class="dev-${iconName}">
								<span class="path1"></span>
								<span class="path2"></span>
								<span class="path3"></span>
								<span class="path4"></span>
								<span class="path5"></span>
							</span>`;
					} else {
						icon = `
							<span class="dev-${iconName}"></span>`;
					}
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
