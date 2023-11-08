'use client';
import React, { useState, useContext } from 'react';
import Section from '@/app/components/section/section';
import Device from '@/app/components/device/device';
import { Me } from '@/app/lib/me';
import PlaceholderImage from '@/img/placeholder.svg';

const DesktopDarkWireframe = require('@/img/wireframes/desktop-dark.svg?url');
const DesktopLightWireframe = require('@/img/wireframes/desktop-light.svg?url');
const LaptopDarkWireframe = require('@/img/wireframes/laptop-dark.svg?url');
const LaptopLightWireframe = require('@/img/wireframes/laptop-light.svg?url');
const TabletDarkWireframe = require('@/img/wireframes/tablet-dark.svg?url');
const TabletLightWireframe = require('@/img/wireframes/tablet-light.svg?url');
const MobileDarkWireframe = require('@/img/wireframes/mobile-dark.svg?url');
const MobileLightWireframe = require('@/img/wireframes/mobile-light.svg?url');

import { ThemeContext } from '@/app/lib/context';
import Image from 'next/image';
import { titleCase } from 'change-case-all';
export default function Hero(): JSX.Element {
	const theme = useContext(ThemeContext);

	const switchWireframes = (device: string = 'desktop') => {
		let wireframe = null;
		switch (device) {
			case 'desktop':
				wireframe =
					theme === 'dark'
						? DesktopDarkWireframe
						: DesktopLightWireframe;
				break;
			case 'laptop':
				wireframe =
					theme === 'dark'
						? LaptopDarkWireframe
						: LaptopLightWireframe;
				break;
			case 'tablet':
				wireframe =
					theme === 'dark'
						? TabletDarkWireframe
						: TabletLightWireframe;
				break;
			case 'mobile':
				wireframe =
					theme === 'dark'
						? MobileDarkWireframe
						: MobileLightWireframe;
				break;
		}

		return (
			<Image
				src={wireframe}
				alt={`${titleCase(device)} Mockup`}
				fill={true}
			/>
		);
	};

	return (
		<Section className="hero !block bg-base-200 pt-24 !pb-0  overflow-hidden">
			<div className="hero-content p-0 w-full flex flex-col md:flex-row">
				<div className="text-center prose lg:prose-xl md:text-left md:w-2/4">
					<h1 className="font-bold font-display">
						<small>
							Hi there, <br />
							my name is
						</small>{' '}
						<br />
						<span className="text-secondary-500">
							{Me.firstName} {Me.lastName}
						</span>
						.
					</h1>
					<p className="lead">
						I am a {Me.location?.city},{' '}
						<abbr title={Me.location?.locality}>
							{Me.location?.localityCode}
						</abbr>{' '}
						based {Me.label}. But {Me.summary}
					</p>
					<div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
						<button className="btn btn-primary">See My Work</button>
						<button className="btn btn-secondary">
							Download My Resume
						</button>
					</div>
				</div>
				<div className="md:w-2/4">
					<div className="md:w-full-pg drop-shadow-lg md:-mr-pg 2xl:mr-0 2xl:w-full">
						<div className="grid grid-cols-12 grid-rows-10  relative">
							<Device
								type="desktop"
								className="w-full col-span-8 row-span-10 col-start-3"
							>
								{switchWireframes('desktop')}
							</Device>
							{/* Laptop */}
							<Device
								type="laptop"
								className="!absolute min-w-[230px] left-0 bottom-0 h-[54.26%] z-10 w-auto aspect-laptop"
							>
								{switchWireframes('laptop')}
							</Device>
							{/* Tablet */}
							<Device
								type="tablet"
								className="!absolute right-0 bottom-0 h-[53.32%] z-10"
							>
								{switchWireframes('tablet')}
							</Device>
							{/* Mobile */}
							<Device
								type="mobile"
								className="!absolute right-[20%] bottom-0 h-[31.04%] z-20"
							>
								{switchWireframes('mobile')}
							</Device>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
