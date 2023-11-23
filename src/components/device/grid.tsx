'use client';
import React, { useState, useContext } from 'react';
import Device, { DeviceProps } from './device';
import ThemeSwap from '../theme-swap/theme-swap';
import DeskLight from '@/img/desk-light.svg';
import DeskDark from '@/img/desk-dark.svg';
function Desktop(props: Omit<DeviceProps, 'type'>) {
	return (
		<Device type="desktop" className="w-8/12" {...props}>
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

function Grid({ children }: { children?: React.ReactNode }) {
	return (
		<div className="device-grid w-full flex flex-col items-center relative">
			<div className="w-screen sm:w-full-pg drop-shadow-lg -mx-pg sm:ml-0 sm:-mr-pg">
				<div className="-mx-[50vw] sm:-mx-[30vw] md:ml-0 2xl:mr-0  flex flex-col items-center md:items-start">
					<div className="w-[60%]">
						<div className="flex flex-col items-center relative">
							{children}
						</div>
					</div>
					<div className="w-full md:-ml-pg md:w-full-pg 2xl:w-full 2xl:-ml-[5%]">
						<ThemeSwap>
							<ThemeSwap.Light>
								<DeskLight className="block w-full" />
							</ThemeSwap.Light>
							<ThemeSwap.Dark>
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
