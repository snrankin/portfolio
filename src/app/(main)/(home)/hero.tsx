'use client';
import React, { useContext } from 'react';
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
import { TypeAuthorFields, TypeHomePageFields } from '@/lib/types';
import { HeaderContext } from '@/lib/context/header';
import Image from 'next/image';
import { titleCase } from 'change-case-all';
import Link from 'next/link';
import { Markdown } from '@/components/contentful/markdown';

import Shell from '@/components/code/shell';
export default function Hero({
	me,
	home,
}: {
	me?: TypeAuthorFields;
	home?: TypeHomePageFields;
}): JSX.Element {
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
	const headerCtx: {
		height: number;
	} = useContext(HeaderContext);
	return (
		<Section
			id="hero"
			className="hero !block bg-base-200 pt-24 !pb-0  overflow-hidden"
			style={{ paddingTop: `${headerCtx.height}px` }}
		>
			<div className="hero-content p-0 w-full grid grid-cols-1 md:grid-cols-2">
				<div
					className="text-center prose lg:prose-xl xl:text-left pt-section
				md:col-span-2 md:row-start-1 md:pb-section xl:pb-0 xl:col-span-1 self-end"
				>
					<h1 className="font-bold font-display">
						<small className="block">
							Hi there, <br className="md:hidden" />
							my name is
						</small>{' '}
						{!!me?.firstName && !!me?.lastName && (
							<span className="text-primary-500">
								{me.firstName} {me.lastName}
							</span>
						)}
						<span className="text-secondary-500">.</span>
					</h1>
				</div>
				<div className="text-center prose lg:prose-xl md:text-left  md:row-start-2 md:col-start-1 xl:pb-section  ">
					{!!home?.heroText && <Markdown content={home.heroText} />}
					<div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
						<Link href="#projects" className="btn btn-primary">
							See My Work
						</Link>
						<button className="btn btn-secondary">
							Download My Resume
						</button>
					</div>
				</div>
				<div className="w-full md:row-start-2 md:col-start-2 xl:row-start-1 xl:row-end-3 xl:col-span-2 self-end">
					<div className="md:w-full-pg drop-shadow-lg md:-mr-pg">
						<div className="md:-mr-[40%] lg:mr-0">
							<Grid>
								<Grid.Desktop>
									<div className="grow w-full h-full flex flex-col items-center justify-center">
										<Shell command="$(whoami)" />
									</div>
								</Grid.Desktop>
								<Grid.Laptop>
									<ThemeSwap
										light={switchWireframes(
											'laptop',
											'light'
										)}
										dark={switchWireframes(
											'laptop',
											'dark'
										)}
									/>
								</Grid.Laptop>
								<Grid.Tablet>
									<ThemeSwap
										light={switchWireframes(
											'tablet',
											'light'
										)}
										dark={switchWireframes(
											'tablet',
											'dark'
										)}
									/>
								</Grid.Tablet>
								<Grid.Mobile>
									<ThemeSwap
										light={switchWireframes(
											'mobile',
											'light'
										)}
										dark={switchWireframes(
											'mobile',
											'dark'
										)}
									/>
								</Grid.Mobile>
							</Grid>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
