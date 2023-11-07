'use client';
import React from 'react';
import classNames from 'classnames';
import Icon from '../icons/icon-item';
import { DeviceProps } from './device';

export const WindowButtons = () => (
	<div className="window-icons inline-flex gap-1 justify-around items-center">
		<span className="w-[0.8em] h-[0.8em] bg-danger-500 rounded-full"></span>
		<span className="w-[0.8em] h-[0.8em] bg-warning-500 rounded-full"></span>
		<span className="w-[0.8em] h-[0.8em] bg-success-500 rounded-full"></span>
	</div>
);

export default function BrowserToolbar(props: DeviceProps) {
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
			{props.type != 'mobile' && (
				<div className={leftIconClasses}>
					{props.type == 'desktop' ||
						(props.type == 'laptop' && <WindowButtons />)}
					{/* <Icon icon="sidebar" group="ios" />
					<div className="flex justify-around items-center">
						<Icon icon="chevron-left" group="ios" />
						<Icon icon="chevron-right" group="ios" />
					</div> */}
				</div>
			)}
			<div className="address-bar w-full !grid grid-cols-1 gap-1 items-center rounded text-stone-800 dark:text-stone-100 text-center font-system bg-stone-50 dark:bg-stone-600">
				{/* {props.type == 'desktop' ? (
					<Icon icon="search" group="ios" />
				) : (
					<Icon icon="textResize" group="ios" />
				)}
				{props.type == 'mobile' && <Icon icon="puzzle" group="ios" />} */}
				<div className="web-address">{props.url}</div>
				{/* {props.type == 'tablet' && <Icon icon="puzzle" group="ios" />}
				<Icon icon="refresh" group="ios" /> */}
			</div>
			{/* {props.type != 'mobile' && (
				<div className={rightIconClasses}>
					<Icon icon="share" group="ios" />
					<Icon icon="plus" group="ios" />
					<Icon icon="tabs" group="ios" />
				</div>
			)} */}
		</div>
	);
}
