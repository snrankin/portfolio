'use client';
import React from 'react';
import Section from '@/components/section/section';
import ThemeSwap from '@/components/theme-swap/theme-swap';
import Grid from '@/components/device/grid';
import { IAuthor } from '@/lib/api/authors';
const DesktopDarkWireframe = require('@/img/wireframes/desktop-dark.svg?url');
const DesktopLightWireframe = require('@/img/wireframes/desktop-light.svg?url');
const LaptopDarkWireframe = require('@/img/wireframes/laptop-dark.svg?url');
const LaptopLightWireframe = require('@/img/wireframes/laptop-light.svg?url');
const TabletDarkWireframe = require('@/img/wireframes/tablet-dark.svg?url');
const TabletLightWireframe = require('@/img/wireframes/tablet-light.svg?url');
const MobileDarkWireframe = require('@/img/wireframes/mobile-dark.svg?url');
const MobileLightWireframe = require('@/img/wireframes/mobile-light.svg?url');

import Image from 'next/image';
import { titleCase } from 'change-case-all';
import Link from 'next/link';
export default function Hero({ me }: { me: IAuthor }): JSX.Element {
	const switchWireframes = (device: string = 'desktop', theme = 'light') => {
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
				className="w-full"
				sizes="100vw"
				loading="lazy"
				style={{
					width: '100%',
					height: 'auto',
				}}
			/>
		);
	};

	return (
		<Section className="hero !block bg-base-200 pt-24 !pb-0  overflow-hidden">
			<div className="hero-content p-0 w-full flex flex-col md:flex-row md:items-end">
				<div className="text-center prose lg:prose-xl md:text-left md:w-2/4 md:pb-section">
					<h1 className="font-bold font-display">
						<small>
							Hi there, <br />
							my name is
						</small>{' '}
						<br />
						<span className="text-secondary-500">
							{me.firstName} {me.lastName}
						</span>
						.
					</h1>
					{!!me.description && (
						<p className="lead">{me.description}</p>
					)}
					<div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
						<Link href="#projects" className="btn btn-primary">
							See My Work
						</Link>
						<button className="btn btn-secondary">
							Download My Resume
						</button>
					</div>
				</div>
				<div className="w-full md:w-2/4">
					<div className="md:w-full-pg drop-shadow-lg md:-mr-pg">
						<Grid>
							<Grid.Desktop>
								<ThemeSwap
									light={switchWireframes('desktop', 'light')}
									dark={switchWireframes('desktop', 'dark')}
								/>
							</Grid.Desktop>
							<Grid.Laptop>
								<ThemeSwap
									light={switchWireframes('laptop', 'light')}
									dark={switchWireframes('laptop', 'dark')}
								/>
							</Grid.Laptop>
							<Grid.Tablet>
								<ThemeSwap
									light={switchWireframes('tablet', 'light')}
									dark={switchWireframes('tablet', 'dark')}
								/>
							</Grid.Tablet>
							<Grid.Mobile>
								<ThemeSwap
									light={switchWireframes('mobile', 'light')}
									dark={switchWireframes('mobile', 'dark')}
								/>
							</Grid.Mobile>
						</Grid>
					</div>
				</div>
			</div>
		</Section>
	);
}
