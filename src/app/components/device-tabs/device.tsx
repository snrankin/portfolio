'use client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { useState } from 'react';
import { titleCase } from 'change-case-all';
import classNames from 'classnames';
import Image from 'next/image';
import Icon from '../icons/icon';
export interface DeviceProps {
	type: 'desktop' | 'tablet' | 'mobile';
	url: string;
	title?: string;
	children?: React.ReactNode;
}

const DesktopButtons = () => (
	<div className="window-icons inline-flex gap-1 justify-around items-center">
		<span className="w-[0.8em] h-[0.8em] bg-danger-500 rounded-full"></span>
		<span className="w-[0.8em] h-[0.8em] bg-amber-500 rounded-full"></span>
		<span className="w-[0.8em] h-[0.8em] bg-success-500 rounded-full"></span>
	</div>
);

const TabletButtons = () => (
	<>
		<div className="h-[2px] w-[8%] bg-stone-900 dark:bg-stone-900 absolute right-[7%] -top-[4px] rounded-t-lg"></div>
		<div className="h-[6%] w-[2px] bg-stone-900 dark:bg-stone-900 absolute -right-[2px] top-[15%] rounded-r-lg"></div>
		<div className="h-[6%] w-[2px] bg-stone-900 dark:bg-stone-900 absolute -right-[2px] top-[23%] rounded-r-lg"></div>
	</>
);

const MobileButtons = () => (
	<>
		<div className="grid grid-cols-1 w-[2px] h-[23%] grid-rows-[1fr_2fr_2fr] gap-3 absolute -left-[2px] top-[20%]">
			<div className=" bg-stone-900 dark:bg-stone-900 rounded-l-lg"></div>
			<div className=" bg-stone-900 dark:bg-stone-900 rounded-l-lg"></div>
			<div className=" bg-stone-900 dark:bg-stone-900 rounded-l-lg"></div>
		</div>

		<div className="h-[12%] w-[2px] bg-stone-900 dark:bg-stone-900 absolute -right-[2px] top-[30%] rounded-r-lg"></div>
	</>
);

const BrowserToolbar = (props: DeviceProps) => {
	let rightIconClasses = classNames(
		'icons-right',
		'flex',
		'items-center',
		'gap-2',
		{
			'justify-around': props.type != 'desktop',
			'justify-end': props.type == 'desktop',
		}
	);

	let leftIconClasses = classNames(
		'icons-left',
		'flex',
		'items-center',
		'gap-2',
		{
			'justify-around': props.type != 'desktop',
			'justify-start': props.type == 'desktop',
		}
	);

	let wrapperClasses = classNames(
		'mockup-browser-toolbar',
		'text-blue-500',
		'dark:text-blue-400',
		'text-sm',
		'w-full',
		'!px-[3%]',
		{
			'!grid': props.type != 'mobile',
			'grid-cols-[1fr_3fr_1fr]': props.type != 'mobile',
		}
	);

	return (
		<div className={wrapperClasses}>
			{props.type != 'mobile' ? (
				<div className={leftIconClasses}>
					{props.type == 'desktop' ? <DesktopButtons /> : null}
					<Icon icon="sidebar" group="ios" />
					<div className="flex justify-around items-center">
						<Icon icon="chevron-left" group="ios" />
						<Icon icon="chevron-right" group="ios" />
					</div>
				</div>
			) : null}
			<div className="address-bar w-full !grid grid-cols-[1em_1em_1fr_1em_1em] gap-1 items-center rounded text-stone-800 dark:text-stone-100 text-center font-system bg-stone-50 dark:bg-stone-600">
				<span className="icon">
					{props.type == 'desktop' ? (
						<Icon icon="search" group="ios" />
					) : (
						<Icon icon="textResize" group="ios" />
					)}
				</span>
				<span className="icon">
					{props.type == 'mobile' ? (
						<Icon icon="puzzle" group="ios" />
					) : null}
				</span>
				<div className="web-address">{props.url}</div>
				<span className="icon">
					{props.type == 'tablet' ? (
						<Icon icon="puzzle" group="ios" />
					) : null}
				</span>
				<span className="icon">
					<Icon icon="refresh" group="ios" />
				</span>
			</div>
			{props.type != 'mobile' ? (
				<div className={rightIconClasses}>
					<Icon icon="share" group="ios" />
					<Icon icon="plus" group="ios" />
					<Icon icon="tabs" group="ios" />
				</div>
			) : null}
		</div>
	);
};
export default function Device(props: DeviceProps): JSX.Element {
	var wrapperClasses = classNames(
		'device-wrapper',
		'absolute',
		'inset-0',
		'w-full',
		'h-full',
		{}
	);
	var deviceClasses = classNames('device', `device-${props.type}`, {
		'bg-stone-800': props.type == 'desktop',
		'dark:bg-gray-200': props.type == 'desktop',
		'rounded-t-xl': props.type == 'desktop',
		'p-[3%]': props.type == 'desktop',
		'bg-stone-900': props.type != 'desktop',
		'dark:bg-stone-900': props.type != 'desktop',
		'border-2': props.type != 'desktop',
		'border-gray-400': props.type != 'desktop',
		'dark:border-gray-400': props.type != 'desktop',
		'p-[3.5%]': props.type == 'tablet',
		'rounded-[2.5rem]': props.type == 'tablet',
		'p-[2%]': props.type == 'mobile',
		'rounded-[2rem]': props.type == 'mobile',
		'w-full': props.type != 'desktop',
		'h-full': props.type != 'desktop',
	});
	var spacerClasses = classNames(
		'relative',
		'display',
		'w-auto',
		// 'min-w-full',
		'md:h-[75vh]',
		'lg:h-[50vh]',
		'max-h-full',
		'mx-auto',
		{
			'aspect-desktop': props.type == 'desktop',
			'aspect-tablet': props.type == 'tablet',
			'aspect-mobile': props.type == 'mobile',
		}
	);
	var screenClasses = classNames(
		'screen',
		'relative',
		'overflow-hidden',
		'display',

		{
			'w-full': props.type != 'desktop',
			'h-full': props.type != 'desktop',
			'aspect-video': props.type == 'desktop',
			'rounded-[1.5rem]': props.type == 'tablet',
			'rounded-[1.75rem]': props.type == 'mobile',
			'rounded-0': props.type == 'desktop',
		}
	);
	let children: React.ReactNode = props.children;
	return (
		<div className="device-mockup max-w-full w-full min-w-full">
			<div className={spacerClasses}>
				<div className={wrapperClasses}>
					<div className={deviceClasses}>
						{props.type == 'tablet' ? <TabletButtons /> : null}
						{props.type == 'mobile' ? <MobileButtons /> : null}
						<div className={screenClasses}>
							<div
								className={`absolute w-full h-full mockup-browser ${props.type} bg-stone-200 dark:bg-stone-700 top-0 left-0`}
							>
								{props.type == 'mobile' ? (
									<div className="camera-wrapper ">
										<div className="island"></div>
									</div>
								) : null}
								<BrowserToolbar {...props} />
								{children}
							</div>
						</div>
					</div>
					{props.type == 'desktop' ? (
						<>
							<div className="desktop-bottom bg-stone-900 dark:bg-gray-300 rounded-b-xl w-full">
								<div className="spacer"></div>
							</div>
							<div className="relative mx-auto bg-stone-800 dark:bg-gray-200 rounded-b-xl overflow-hidden max-w-[27%]">
								<div className="w-full aspect-w-5 aspect-h-3"></div>
								<div className="h-[10px] w-full bg-stone-900 dark:bg-gray-300"></div>
							</div>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
}
