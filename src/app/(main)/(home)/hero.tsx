'use client';
import React, { useContext } from 'react';
import styles from './home.module.css';
import Section from '@/components/section/section';
import ThemeSwap from '@/components/theme-swap/theme-swap';

const HeroLight = require('@/img/hero-light.svg?url');
const HeroDark = require('@/img/hero-dark.svg?url');
import { TypeAuthorFields, TypeHomePageFields } from '@/lib/types';
import { HeaderContext } from '@/lib/context/header';
import Image from 'next/image';
import { titleCase } from 'change-case-all';
import { Markdown } from '@/components/contentful/markdown';
export default function Hero({
	me,
	home,
}: {
	me?: TypeAuthorFields;
	home?: TypeHomePageFields;
}): JSX.Element {
	const switchWireframes = (device: string = 'desktop', theme = 'light') => {
		let wireframe = theme === 'dark' ? HeroDark : HeroLight;

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
			className={`hero !block pt-24 !pb-0  overflow-hidden ${styles.heroBG}`}
			style={{ paddingTop: `${headerCtx.height}px` }}
		>
			<div className="hero-content p-0 w-full grid grid-cols-1 pt-section md:grid-rows-[max-content_1fr]">
				<div className="w-full sm:row-start-1 sm:row-span-2 col-start-1 col-end-2 ">
					<div className="sm:w-full-pg drop-shadow-lg sm:-mr-pg">
						<div className="sm:-mr-[150vw] md:-mr-[70vw] xl:-mr-[30%] 2xl:mr-0">
							<ThemeSwap
								light={switchWireframes('desktop', 'light')}
								dark={switchWireframes('desktop', 'dark')}
							/>
						</div>
					</div>
				</div>
				<div
					className={`text-center relative z-10 md:text-left
				row-start-1 col-start-1 col-end-2 ${styles.heroTitle}`}
				>
					<h1 className="font-bold text-8xl md:text-5xl xl:text-5xl font-display">
						<small className="block text-[0.58em] md:whitespace-nowrap">
							Hi there, my name is
						</small>{' '}
						{!!me?.firstName && !!me?.lastName && (
							<span className="text-primary-500 whitespace-nowrap">
								{me.firstName} {me.lastName}
							</span>
						)}
						<span className="text-secondary-500">.</span>
					</h1>
				</div>
				<div
					className={`prose lg:prose-xl dark:prose-invert max-w-none relative z-10 row-start-2 col-start-1 col-end-2  xl:pb-section self-start md:pr-[50%] ${styles.heroText}`}
				>
					{!!home?.heroText && <Markdown content={home.heroText} />}
				</div>
			</div>
		</Section>
	);
}
