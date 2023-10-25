import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';

import Mobile from '@/icons/mobile.svg';
import Tablet from '@/icons/tablet.svg';
import Desktop from '@/icons/desktop.svg';
export default function TabsBasicExample() {
	const [basicActive, setBasicActive] = useState('tab1');

	const handleBasicClick = (value: string) => {
		if (value === basicActive) {
			return;
		}
		setBasicActive(value);
	};

	return (
		<Tabs>
			<TabList className="tabs tabs-boxed">
				<Tab className="tab tab-active">
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

			<TabPanel>
				<div className="mockup-browser border bg-base-300">
					<div className="mockup-browser-toolbar">
						<div className="input">https://lazoo.org</div>
					</div>
					<Image src="/lazoo-desktop.png" alt="Desktop view of LA Zoo Website" className="w-full" width={1140} height={810} />
				</div>
			</TabPanel>
			<TabPanel>
				<div className="relative flex justify-center w-[250px] h-[400px]border-8 border-black rounded-2xl">
					<div className="absolute border-4  border-black h-full w-full"></div>
					<span className="border border-black bg-black w-3 h-3 mt-2 rounded-full"></span>
					<span className="absolute -right-2.5 top-20 border-2 border-black h-10 rounded-md"></span>
				</div>
			</TabPanel>
			<TabPanel>
				<div className="mockup-phone border-primary">
					<div className="display">
						<div className="mockup-browser mobile bg-base-300">
							<div className="camera-wrapper">
								<div className="camera"></div>
							</div>
							<div className="mockup-browser-toolbar">
								<div className="input">https://daisyui.com</div>
							</div>
							<Image src="/lazoo-mobile.png" alt="Mobile view of LA Zoo Website" className="w-full" width={900} height={1950} />
						</div>
					</div>
				</div>
			</TabPanel>
		</Tabs>
	);
}
