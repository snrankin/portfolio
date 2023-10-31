import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Image from 'next/image';

import Mobile from '@/img/mobile.svg';
import Tablet from '@/img/tablet.svg';
import Desktop from '@/img/desktop.svg';

import DesktopPreview from '@/img/lazoo-desktop.png';
import TabletPreview from '@/img/lazoo-tablet.png';
import MobilePreview from '@/img/lazoo-mobile.png';

import IosShare from '@/img/ios-share.svg';
import IosSidebarLeft from '@/img/ios-sidebar-left.svg';
import IosChevronRight from '@/img/ios-chevron-right.svg';
import IosChevronLeft from '@/img/ios-chevron-left.svg';
import IosTextSize from '@/img/ios-text-size.svg';
import IosPuzzle from '@/img/ios-puzzle.svg';
import IosRefresh from '@/img/ios-refresh.svg';
import IosPlus from '@/img/ios-plus.svg';
import IosTabs from '@/img/ios-tabs.svg';

import Location from '@/img/location.svg';
import dayjs from 'dayjs';

import Device from './device';
export default function DeviceTabs() {
	const [basicActive, setBasicActive] = useState('tab1');

	let url = 'lazoo.org';
	let title = 'LA Zoo website';
	return (
		<Tabs
			selectedTabClassName="tab-active"
			forceRenderTabPanel={true}
			className="flex flex-col-reverse justify-center items-center"
		>
			<TabList className="tabs tabs-boxed !inline-flex !w-max justify-center">
				<Tab className="tab">
					<span className="icon">
						<Desktop className="block" />
					</span>
					Desktop
				</Tab>
				<Tab className="tab">
					<span className="icon">
						<Tablet className="block" />
					</span>
					Tablet
				</Tab>
				<Tab className="tab">
					<span className="icon">
						<Mobile className="block" />
					</span>
					Mobile
				</Tab>
			</TabList>

			<TabPanel className="py-11 max-w-full w-full min-w-full">
				<div className="flex justify-center items-center">
					<Device url={url} type="desktop" title={title}>
						<Image
							src={DesktopPreview}
							alt="Desktop view of LA Zoo Website"
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
			<TabPanel className="py-11 max-w-full w-full min-w-full">
				<div className="flex justify-center items-center">
					<Device url={url} type="tablet" title={title}>
						<Image
							src={TabletPreview}
							alt="Tablet view of LA Zoo Website"
							className="w-full"
							sizes="100vw"
							loading="lazy"
							style={{
								width: '100%',
								height: 'auto',
							}}
						/>
					</Device>
					{/* <div className="p-[3.5%] relative mx-auto border-gray-400 dark:border-gray-400 bg-stone-900 dark:bg-stone-900 border-[2px] rounded-[2.5rem] ">
						<div className="h-[2px] w-[8%] bg-stone-900 dark:bg-stone-900 absolute right-[7%] -top-[4px] rounded-t-lg"></div>
						<div className="h-[6%] w-[2px] bg-stone-900 dark:bg-stone-900 absolute -right-[5px] top-[15%] rounded-r-lg"></div>
						<div className="h-[6%] w-[2px] bg-stone-900 dark:bg-stone-900 absolute -right-[5px] top-[23%] rounded-r-lg"></div>
						<div className="rounded-[1rem] overflow-hidden aspect-tablet relative display w-[512px]">
							<div className="absolute w-full h-full mockup-browser tablet bg-base-300 dark:bg-stone-700">
								<div className="mockup-browser-toolbar grid grid-cols-[1fr_3fr_1fr]">
									<div className="icons-left flex justify-around items-center">
										<span className="icon text-blue-500 dark:text-blue-400">
											<IosSidebarLeft />
										</span>
										<span className="icon text-blue-500 dark:text-blue-400">
											<IosChevronLeft
												style={{ height: '0.8em' }}
											/>
										</span>
										<span className="icon text-blue-500 dark:text-blue-400">
											<IosChevronRight
												style={{ height: '0.8em' }}
											/>
										</span>
									</div>
									<div className="address-bar w-full !grid grid-cols-[1em_1em_1fr_1em_1em] gap-1 items-center rounded text-stone-800 dark:text-stone-100 text-center font-system bg-stone-50 dark:bg-stone-600">
										<span className="icon">
											<IosTextSize />
										</span>
										<div className="web-address col-start-3">
											{url}
										</div>

										<span className="icon col-start-4">
											<IosPuzzle />
										</span>
										<span className="icon col-start-5">
											<IosRefresh
												style={{ height: '0.9em' }}
											/>
										</span>
									</div>

									<div className="icons-right flex justify-around items-center">
										<span className="icon text-blue-500 dark:text-blue-400">
											<IosShare />
										</span>
										<span className="icon text-blue-500 dark:text-blue-400">
											<IosPlus
												style={{ height: '0.8em' }}
											/>
										</span>
										<span className="icon text-blue-500 dark:text-blue-400">
											<IosTabs />
										</span>
									</div>
								</div>
								<Image
									src={TabletPreview}
									alt="Tablet view of LA Zoo Website"
									className="w-full"
									sizes="100vw"
									loading="lazy"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</div>
						</div>
					</div> */}

					{/* <div className="mockup-tablet border-primary h-full max-h-full w-auto">
						<div className="display">
							<div className="mockup-browser mobile bg-base-300">
								<div className="mockup-browser-toolbar">
									<div className="input">{url}</div>
								</div>
								<Image
									src={TabletPreview}
									alt="Tablet view of LA Zoo Website"
									className="w-full"
									sizes="100vw"
									loading="lazy"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</div>
						</div>
					</div> */}
				</div>
			</TabPanel>
			<TabPanel className="py-11 max-w-full w-full min-w-full">
				<div className="flex justify-center items-center">
					<Device url={url} type="mobile" title={title}>
						<Image
							src={MobilePreview}
							alt="Mobile view of LA Zoo Website"
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
		</Tabs>
	);
}
