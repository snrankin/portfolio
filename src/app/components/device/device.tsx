'use client';
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import Icon from '../icons/icon-item';
import './devices.css';
import BrowserToolbar from './toolbar';
import DesktopFrame from '@/img/desktop.svg';
import LaptopFrame from '@/img/laptop.svg';
import TabletFrame from '@/img/tablet.svg';
import MobileFrame from '@/img/mobile.svg';
import { omit, pick, set } from 'lodash';

export interface DeviceProps extends HTMLProps<HTMLDivElement> {
	type: 'desktop' | 'laptop' | 'tablet' | 'mobile';
	url?: string;
	title?: string;
	children?: React.ReactNode;
}

export default function Device(props: DeviceProps): JSX.Element {
	var wrapperClasses = classNames(
		'device',
		`device-${props.type}`,
		`aspect-${props.type}`,
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
	var innerClasses = classNames(
		`aspect-${props.type}`,
		'w-full',
		'relative',
		'z-10',
		'block',
		'min-w-full'
	);

	var screenClasses = classNames(
		'screen',
		'relative',
		'overflow-hidden',
		'display',
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
		'left-0',
		'top-0',
		'display',
		{
			'h-[58.8%]': props.type == 'desktop',
			'pt-[2.8%]': props.type == 'laptop',
			'px-[7.361%]': props.type == 'laptop',
			'p-[5.247%]': props.type == 'tablet',
			// 'p-[4.677%]': props.type == 'mobile',
			'p-[2.6%]': props.type == 'desktop',
		}
	);

	let aspectClasses = classNames(
		'screen',
		'relative',
		'overflow-hidden',
		'display',
		'rounded-0',
		'w-full',
		'bg-white',
		{
			'aspect-tablet': props.type == 'tablet',
			'aspect-mobile': props.type == 'mobile',
		}
	);

	let children: React.ReactNode = props.children;
	return (
		<div {...atts}>
			<div className={displayClasses}>
				<div className={screenClasses}>
					<div
						className={`absolute top-0 left-0 w-full h-full  mockup-browser ${props.type} !rounded-none`}
					>
						{props.url != undefined && (
							<BrowserToolbar {...props} />
						)}

						{children}
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
		</div>
	);
}
