'use client';
import React, { useState, useContext, Children } from 'react';
import Device, { DeviceProps } from './device';
import ThemeSwap from '../theme-swap/theme-swap';
import DeskLight from '@/img/desk-light.svg';
import DeskDark from '@/img/desk-dark.svg';
import CupLight from '@/img/cup-light.svg';
import CupDark from '@/img/cup-dark.svg';
import LaptopLight from '@/img/laptop-light.svg';
import LaptopDark from '@/img/laptop-dark.svg';
import OrganizerLight from '@/img/organizer-light.svg';
import OrganizerDark from '@/img/organizer-dark.svg';
import KeyboardLight from '@/img/keyboard-light.svg';
import KeyboardDark from '@/img/keyboard-dark.svg';

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
	console.log(Children.count(children));
	return (
		<div className="device-grid w-full">
			<div className="w-screen sm:w-full-pg drop-shadow-lg -mx-pg sm:ml-0 sm:-mr-pg">
				<div className="-mx-[50vw] md:-ml-[20vw] md:-mr-[40vw] lg:-ml-[10%] 2xl:mr-0 grid grid-cols-12">
					<div className="w-full col-span-6 col-start-3 md:col-start-2">
						<div className="flex flex-col items-center relative">
							{children}
						</div>
					</div>
					<div className="w-full col-span-12">
						<ThemeSwap>
							<ThemeSwap.Light>
								{Children.only(children) && (
									<div>
										<OrganizerLight />
										<CupLight />
										<KeyboardLight />
										<LaptopLight />
									</div>
								)}
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
