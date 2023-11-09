'use client';
import React, { useState, useContext } from 'react';
import Device, { DeviceProps } from './device';
function Desktop(props: Omit<DeviceProps, 'type'>) {
	return (
		<Device
			type="desktop"
			className="w-full col-span-8 row-span-10 col-start-3"
			{...props}
		>
			{props.children}
		</Device>
	);
}

function Laptop(props: Omit<DeviceProps, 'type'>) {
	return (
		<Device
			type="laptop"
			className="!absolute min-w-[230px] left-0 bottom-0 h-[54.26%] z-10 w-auto aspect-laptop"
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
			className="!absolute right-[20%] bottom-0 h-[31.04%] z-20"
			{...props}
		>
			{props.children}
		</Device>
	);
}

function Grid({ children }: { children?: React.ReactNode }) {
	return (
		<div className="grid grid-cols-12 grid-rows-10  relative text-[12px]">
			{children}
		</div>
	);
}

Grid.Desktop = Desktop;
Grid.Laptop = Laptop;
Grid.Tablet = Tablet;
Grid.Mobile = Mobile;

export default Grid;
