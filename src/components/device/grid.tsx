'use client';
import React, { useState, useContext } from 'react';
import Device, { DeviceProps } from './device';
function Desktop(props: Omit<DeviceProps, 'type'>) {
	return (
		<Device type="desktop" className="w-7/12" {...props}>
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
		<div className="w-full flex flex-col items-center relative">
			{children}
		</div>
	);
}

Grid.Desktop = Desktop;
Grid.Laptop = Laptop;
Grid.Tablet = Tablet;
Grid.Mobile = Mobile;

export default Grid;
