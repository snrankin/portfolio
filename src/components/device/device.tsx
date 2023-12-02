'use client';
import './devices.css';

import classNames from 'classnames';
import { omit, set } from 'lodash';
import React, { HTMLProps } from 'react';

import KeyboardDark from '@/img/keyboard-dark.svg';
import KeyboardLight from '@/img/keyboard-light.svg';

import ThemeSwap from '../theme-swap/theme-swap';
import DesktopFrameLight from '@/img/devices/desktop-light.svg';
import DesktopFrameDark from '@/img/devices/desktop-dark.svg';
import LaptopFrameLight from '@/img/devices/laptop-light.svg';
import LaptopFrameDark from '@/img/devices/laptop-dark.svg';
import TabletFrameLight from '@/img/devices/tablet-light.svg';
import TabletFrameDark from '@/img/devices/tablet-dark.svg';
import MobileFrameLight from '@/img/devices/mobile-light.svg';
import MobileFrameDark from '@/img/devices/mobile-dark.svg';
import BrowserToolbar from './toolbar';

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

	let atts = omit(props, ['type', 'url', 'title', 'children', 'desktopOnly']);

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
				<ThemeSwap>
					<ThemeSwap.Light>
						<MobileFrameLight className={deviceClasses} />
					</ThemeSwap.Light>
					<ThemeSwap.Dark>
						<MobileFrameDark className={deviceClasses} />
					</ThemeSwap.Dark>
				</ThemeSwap>
			)}
			{props.type == 'tablet' && (
				<ThemeSwap>
					<ThemeSwap.Light>
						<TabletFrameLight className={deviceClasses} />
					</ThemeSwap.Light>
					<ThemeSwap.Dark>
						<TabletFrameDark className={deviceClasses} />
					</ThemeSwap.Dark>
				</ThemeSwap>
			)}
			{props.type == 'laptop' && (
				<ThemeSwap>
					<ThemeSwap.Light>
						<LaptopFrameLight className={deviceClasses} />
					</ThemeSwap.Light>
					<ThemeSwap.Dark>
						<LaptopFrameDark className={deviceClasses} />
					</ThemeSwap.Dark>
				</ThemeSwap>
			)}
			{props.type == 'desktop' && (
				<ThemeSwap>
					<ThemeSwap.Light>
						<DesktopFrameLight className={deviceClasses} />
					</ThemeSwap.Light>
					<ThemeSwap.Dark>
						<DesktopFrameDark className={deviceClasses} />
					</ThemeSwap.Dark>
				</ThemeSwap>
			)}
			{featured && (
				<div className="relative">
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
