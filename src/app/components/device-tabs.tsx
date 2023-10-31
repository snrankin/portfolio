'use client';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
	StaticImageData,
	StaticImport,
} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import Mobile from '@/img/mobile.svg';
import Tablet from '@/img/tablet.svg';
import Desktop from '@/img/desktop.svg';

import Device from './device';
import { Project } from './projects';

export default function DeviceTabs(props: Project) {
	console.log('🚀 ~ file: device-tabs.tsx:19 ~ DeviceTabs ~ props:', props);

	return (
		<Tabs
			selectedTabClassName="tab-active"
			forceRenderTabPanel={true}
			className="flex flex-col-reverse justify-center items-center"
		>
			<TabList className="tabs tabs-boxed !inline-flex !w-max justify-center">
				{props.desktop != undefined && props.url != undefined ? (
					<Tab className="tab">
						<span className="icon">
							{/* <Desktop className="block" /> */}
						</span>
						Desktop
					</Tab>
				) : null}
				{props.tablet != undefined && props.url != undefined ? (
					<Tab className="tab">
						<span className="icon">
							{/* <Tablet className="block" /> */}
						</span>
						Tablet
					</Tab>
				) : null}
				{props.mobile != undefined && props.url != undefined ? (
					<Tab className="tab">
						<span className="icon">
							{/* <Mobile className="block" /> */}
						</span>
						Mobile
					</Tab>
				) : null}
			</TabList>
			{props.desktop != undefined && props.url != undefined ? (
				<TabPanel className="py-11 max-w-full w-full min-w-full">
					<div className="flex justify-center items-center">
						<Device url={props.url} type="desktop">
							<Image
								src={props.desktop}
								alt={`Desktop view of ${props.name}`}
								className="w-full"
								sizes="100vw"
								loading="lazy"
								style={{
									width: '100%',
									height: 'auto',
								}}
							/>
						</Device>
					</div>
				</TabPanel>
			) : null}
			{props.tablet != undefined && props.url != undefined ? (
				<TabPanel className="py-11 max-w-full w-full min-w-full">
					<div className="flex justify-center items-center">
						<Device url={props.url} type="tablet">
							<Image
								src={props.tablet}
								alt={`Tablet view of ${props.name}`}
								className="w-full"
								sizes="100vw"
								loading="lazy"
								style={{
									width: '100%',
									height: 'auto',
								}}
							/>
						</Device>
					</div>
				</TabPanel>
			) : null}
			{props.mobile != undefined && props.url != undefined ? (
				<TabPanel className="py-11 max-w-full w-full min-w-full">
					<div className="flex justify-center items-center">
						<Device url={props.url} type="mobile">
							<Image
								src={props.mobile}
								alt={`Mobile view of ${props.name}`}
								className="w-full"
								sizes="100vw"
								loading="lazy"
								style={{
									width: '100%',
									height: 'auto',
								}}
							/>
						</Device>
					</div>
				</TabPanel>
			) : null}
		</Tabs>
	);
}
