'use client';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Icon from '../icons/icon-item';
import Image from 'next/image';

import Device from '../device/device';
import { IProject } from '@/app/lib/interfaces';

export default function DeviceTabs(props: IProject) {
	return (
		<Tabs
			selectedTabClassName="tab-active"
			forceRenderTabPanel={true}
			className="flex flex-col-reverse justify-center items-center"
		>
			<TabList className="tabs tabs-boxed !inline-flex !w-max justify-center">
				{props.desktop != undefined && props.url != undefined ? (
					<Tab className="tab">
						<Icon
							icon="desktop"
							group="ios"
							title="Desktop"
							titleDisplay="inline"
						/>
					</Tab>
				) : null}
				{props.tablet != undefined && props.url != undefined ? (
					<Tab className="tab">
						<Icon
							icon="tablet"
							group="ios"
							title="Tablet"
							titleDisplay="inline"
						/>
					</Tab>
				) : null}
				{props.mobile != undefined && props.url != undefined ? (
					<Tab className="tab">
						<Icon
							icon="mobile"
							group="ios"
							title="Mobile"
							titleDisplay="inline"
						/>
					</Tab>
				) : null}
			</TabList>
			{props.desktop != undefined && props.url != undefined ? (
				<TabPanel className="pb-11 max-w-full w-full min-w-full">
					<div className="flex justify-center items-center">
						<Device url={props.url} type="desktop">
							<Image
								src={props.desktop}
								alt={`Desktop view of ${props.title}`}
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
								alt={`Tablet view of ${props.title}`}
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
								alt={`Mobile view of ${props.title}`}
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
