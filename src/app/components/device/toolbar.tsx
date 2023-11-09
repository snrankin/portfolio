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

const DesktopToolbar = ({ url }: { url?: string }) => {
	return (
		<svg
			id="desktop-toolbar"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1920 52"
		>
			<rect
				width={1920}
				height={52}
				className="fill-gray-200 dark:fill-gray-500"
				strokeWidth={0}
			/>
			<rect
				x={669}
				y="13.5"
				width={582}
				height={27}
				rx="5.78"
				ry="5.78"
				className="fill-white dark:fill-gray-400"
				strokeWidth={0}
			/>
			<text
				transform="translate(940 30.3)"
				className="font-system fill-gray-800 dark:fill-white"
				fontSize={12}
			>
				{url}
			</text>
			<circle
				cx={26}
				cy={26}
				r={6}
				className="fill-error-400"
				strokeWidth={0}
			/>
			<circle
				cx="45.5"
				cy={26}
				r={6}
				className="fill-warning-400"
				strokeWidth={0}
			/>
			<circle
				cx={65}
				cy={26}
				r={6}
				className="fill-success-400"
				strokeWidth={0}
			/>
		</svg>
	);
};

const LaptopToolbar = ({ url }: { url?: string }) => {
	return (
		<svg
			id="laptop-toolbar"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 52"
		>
			<rect
				width={1440}
				height={52}
				className="fill-gray-200 dark:fill-gray-500"
				strokeWidth={0}
			/>
			<rect
				x={429}
				y="13.5"
				width={582}
				height={27}
				rx="5.78"
				ry="5.78"
				className="fill-white dark:fill-gray-400"
				strokeWidth={0}
			/>
			<g>
				<circle
					cx={26}
					cy={26}
					r={6}
					className="fill-error-400"
					strokeWidth={0}
				/>
				<circle
					cx="45.5"
					cy={26}
					r={6}
					className="fill-warning-400"
					strokeWidth={0}
				/>
				<circle
					cx={65}
					cy={26}
					r={6}
					className="fill-success-400"
					strokeWidth={0}
				/>
			</g>
			<text
				transform="translate(672.79 30.11)"
				className="font-system fill-gray-800 dark:fill-white"
				fontSize={12}
			>
				{url}
			</text>
		</svg>
	);
};

const TabletToolbar = ({ url }: { url?: string }) => {
	return (
		<svg
			id="tablet-toolbar"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 768 52"
		>
			<rect
				width={768}
				height={52}
				className="fill-gray-200 dark:fill-gray-500"
				strokeWidth={0}
			/>
			<rect
				x={93}
				y="13.5"
				width={582}
				height={27}
				rx="5.78"
				ry="5.78"
				className="fill-white dark:fill-gray-400"
				strokeWidth={0}
			/>
			<text
				transform="translate(360 30.74)"
				className="font-system fill-gray-800 dark:fill-white"
				fontSize={12}
			>
				{url}
			</text>
		</svg>
	);
};

const MobileToolbar = ({ url }: { url?: string }) => {
	return (
		<svg
			id="mobile-toolbar"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 360 90.76"
		>
			<rect
				width={360}
				height="90.76"
				className="fill-gray-200 dark:fill-gray-500"
				strokeWidth={0}
			/>
			<rect
				x="17.86"
				y="55.22"
				width="324.28"
				height={27}
				rx="4.43"
				ry="4.43"
				className="fill-white dark:fill-gray-400"
				strokeWidth={0}
			/>
			<text
				transform="translate(160 70.6621)"
				className="font-system fill-gray-800 dark:fill-white"
				fontSize={12}
			>
				{url}
			</text>
		</svg>
	);
};

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
		'justify-start'
	);

	let wrapperClasses = classNames(
		'w-full',

		{
			'!grid': props.type != 'mobile',
			'grid-cols-[1fr_3fr_1fr]': props.type != 'mobile',
			flex: props.type == 'mobile',
			'flex-col': props.type == 'mobile',
			'items-center': props.type == 'mobile',
			'justify-center': props.type == 'mobile',
			'pb-[2.3694%]': props.type == 'mobile',
		}
	);

	let barClasses = classNames(
		'address-bar',
		'rounded',
		'text-center',
		'font-system',
		'bg-white',
		{
			'aspect-w-[324]': props.type == 'mobile',
			'aspect-h-[27]': props.type == 'mobile',
			'rounded-sm': props.type == 'mobile',
			'w-[90%]': props.type == 'mobile',
		}
	);

	let urlClasses = classNames('web-address', {
		'text-[1em]': props.type == 'desktop' || props.type == 'laptop',
		'text-[0.75em]': props.type == 'tablet',
		'text-[0.4em]': props.type == 'mobile',
	});

	let url = props.url ?? '';

	return (
		<>
			{props.type == 'desktop' && <DesktopToolbar url={url} />}
			{props.type == 'laptop' && <LaptopToolbar url={url} />}
			{props.type == 'tablet' && <TabletToolbar url={url} />}
			{props.type == 'mobile' && <MobileToolbar url={url} />}
		</>
	);
}
