'use client';
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import Icon from '../icons/icon-item';
import ThemeSwap from '../theme-swap/theme-swap';
import './devices.css';
import BrowserToolbar from './toolbar';
import DesktopFrame from './desktop.svg';
import LaptopFrame from './laptop.svg';
import TabletFrame from './tablet.svg';
import MobileFrame from './mobile.svg';
import KeyboardLight from '@/img/keyboard-light.svg';
import KeyboardDark from '@/img/keyboard-dark.svg';
import { omit, pick, set } from 'lodash';

export interface DeviceProps extends HTMLProps<HTMLDivElement> {
	type: 'desktop' | 'laptop' | 'tablet' | 'mobile';
	url?: string;
	title?: string;
	children?: React.ReactNode;
	desktopOnly?: boolean;
}

export default function Device(props: DeviceProps): JSX.Element {
	const featured = props.desktopOnly != undefined ? props.desktopOnly : false;
	var wrapperClasses = classNames(
		'device',
		`device-${props.type}`,
		'relative',
		'z-10',
		'block',
		props.className
	);

	let atts = omit(props, ['type', 'url', 'title', 'children']);

	set(atts, 'className', wrapperClasses);

	var deviceClasses = classNames(
		'w-full',
		'absolute',
		'inset-0',
		'z-10',
		'block',
		'min-w-full',
		'h-auto'
	);
	var innerClasses = classNames('w-full', {
		'h-[69.67%]': props.type == 'desktop',
		'pt-[1.67%]': props.type == 'laptop',
		'pb-[6.389%]': props.type == 'laptop',
		'px-[7.361%]': props.type == 'laptop',
		'p-[5.247%]': props.type == 'tablet',
		'px-[4.615%]': props.type == 'mobile',
		'pt-[4.2%]': props.type == 'mobile',
		'p-[2.6%]': props.type == 'desktop',
	});

	var screenClasses = classNames(
		'screen',
		'relative',
		'overflow-hidden',
		'rounded-0',
		'w-full',
		'h-full',
		'bg-white',
		`aspect-${props.type}`
	);

	var displayClasses = classNames(
		'flex',
		'w-full',
		'absolute',
		'rounded-0',
		'inset-0',
		'display'
	);

	let browserClasses = classNames(
		'absolute',
		'!rounded-0',
		'!rounded-none',
		'inset-0',
		'overflow-hidden',
		'mockup-browser',
		'bg-base-200',
		'dark:bg-base-500',
		props.type,
		{
			'pt-[1.3858437126%]': props.type == 'laptop',
		}
	);

	let children: React.ReactNode = props.children;

	let keybaordClasses =
		'block w-[68%] absolute top-0 -translate-y-full z-10 left-[24.33%]';
	return (
		<div {...atts}>
			<div className={displayClasses}>
				<div className={innerClasses}>
					<div className={screenClasses}>
						<div className={browserClasses}>
							{props.url != undefined && (
								<BrowserToolbar {...props} />
							)}

							{children}
						</div>
					</div>
				</div>
			</div>

			{props.type == 'mobile' && (
				<MobileFrame className={deviceClasses} />
			)}
			{props.type == 'tablet' && (
				<TabletFrame className={deviceClasses} />
			)}
			{props.type == 'laptop' && (
				<LaptopFrame className={deviceClasses} />
			)}
			{props.type == 'desktop' && (
				<DesktopFrame className={deviceClasses} />
			)}
			{featured && (
				<div className="relative ">
					<ThemeSwap>
						<ThemeSwap.Light>
							<KeyboardLight className={keybaordClasses} />
						</ThemeSwap.Light>
						<ThemeSwap.Dark>
							<KeyboardDark className={keybaordClasses} />
						</ThemeSwap.Dark>
					</ThemeSwap>
				</div>
			)}
		</div>
	);
}
