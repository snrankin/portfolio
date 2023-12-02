'use client';
import React from 'react';

import CupDark from '@/img/cup-dark.svg';
import CupLight from '@/img/cup-light.svg';
import DeskDark from '@/img/desk-dark.svg';
import DeskLight from '@/img/desk-light.svg';
import LaptopDark from '@/img/laptop-dark.svg';
import LaptopLight from '@/img/laptop-light.svg';

import ThemeSwap from '../theme-swap/theme-swap';
import Device, { DeviceProps } from './device';

function Desktop(props: Omit<DeviceProps, 'type'>) {
	return (
		<Device type="desktop" className="w-8/12 mx-auto" {...props}>
			{props.children}
		</Device>
	);
}

function Laptop(props: Omit<DeviceProps, 'type'>) {
	return (
		<Device
			type="laptop"
			className="!absolute left-0 bottom-0 h-[54.26%] z-10 w-auto aspect-laptop"
			{...props}
		>
			{props.children}
		</Device>
	);
}

function Tablet(props: Omit<DeviceProps, 'type'>) {
	return (
		<Device
			type="tablet"
			className="!absolute right-0 bottom-0 h-[53.32%] z-10"
			{...props}
		>
			{props.children}
		</Device>
	);
}

function Mobile(props: Omit<DeviceProps, 'type'>) {
	return (
		<Device
			type="mobile"
			className="!absolute right-[18%] bottom-0 h-[31.04%] z-20"
			{...props}
		>
			{props.children}
		</Device>
	);
}

function Grid({
	children,
	desktopOnly,
}: {
	children?: React.ReactNode;
	desktopOnly?: boolean;
}) {
	const featured = desktopOnly != undefined ? desktopOnly : false;

	return (
		<div
			role="img"
			aria-label="Desk with devices showcasing project images"
			className="device-grid w-full"
		>
			<div className="w-screen sm:w-full-pg drop-shadow-lg -mx-pg sm:ml-0 sm:-mr-pg">
				<div className="-mx-[50vw] sm:-mx-[20vw] md:-ml-[20vw] md:-mr-[40vw] lg:-ml-[10%] 2xl:mr-0 grid grid-cols-12">
					<div className="w-full col-span-6 col-start-4 md:col-start-2">
						<div className="flex flex-col items-center relative">
							{children}
						</div>
					</div>
					<div className="w-full col-span-12">
						<ThemeSwap>
							<ThemeSwap.Light>
								{featured && (
									<div className="relative ">
										<CupLight className="block absolute top-0 left-[25%] md:left-[10%]  -translate-y-full w-[8.33%] z-10" />
										<LaptopLight className="block absolute top-0 -translate-y-full w-[26.53809167%] z-10 right-[4.167%]  md:right-[20%]" />
									</div>
								)}
								<DeskLight className="block w-full" />
							</ThemeSwap.Light>
							<ThemeSwap.Dark>
								{featured && (
									<div className="relative ">
										<CupDark className="block absolute top-0 left-[27.9%] md:left-[10%]  -translate-y-full w-[8.33%] z-10" />
										<LaptopDark className="block absolute top-0 -translate-y-full w-[26.53809167%] z-10 right-[4.167%]  md:right-[20%]" />
									</div>
								)}
								<DeskDark className="block w-full" />
							</ThemeSwap.Dark>
						</ThemeSwap>
					</div>
				</div>
			</div>
		</div>
	);
}

Grid.Desktop = Desktop;
Grid.Laptop = Laptop;
Grid.Tablet = Tablet;
Grid.Mobile = Mobile;

export default Grid;
