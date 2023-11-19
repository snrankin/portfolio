'use client';
import React, { useState, useContext } from 'react';
import Device, { DeviceProps } from './device';

import DeskLight from '@/img/desk-light.svg';
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
			<div className="w-full flex flex-col items-center relative mr-[5%]">
				{children}
			</div>
			<div className="w-screen -mx-pg min-w-full xl:w-[175%]  md:-ml-[150vw] lg:-ml-[70vw] xl:-ml-[75%] xl:-mr-section 2xl:ml-0">
				<DeskLight className="block w-full" />
			</div>
		</div>
	);
}

Grid.Desktop = Desktop;
Grid.Laptop = Laptop;
Grid.Tablet = Tablet;
Grid.Mobile = Mobile;

export default Grid;
