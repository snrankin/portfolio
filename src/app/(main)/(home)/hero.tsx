'use client';
import React, { useContext } from 'react';

import { Markdown } from '@/components/contentful/markdown';
import Section from '@/components/section/section';
import ThemeSwap from '@/components/theme-swap/theme-swap';
import { HeaderContext } from '@/lib/context/header';
import { TypeAuthorFields, TypeHomePageFields } from '@/lib/types';

import styles from './home.module.css';

const HeroLight = require('@/img/hero-light.svg?url');
const HeroDark = require('@/img/hero-dark.svg?url');
export default function Hero({
	me,
	home,
}: {
	me?: TypeAuthorFields;
	home?: TypeHomePageFields;
}): JSX.Element {
	const headerCtx: {
		height: number;
	} = useContext(HeaderContext);
	return (
		<Section
			id="hero"
			className={`hero !block pt-24 !pb-0  overflow-hidden pattern-bg`}
			style={{ paddingTop: `${headerCtx.height}px` }}
		>
			<div className="hero-content p-0 w-full grid grid-cols-1 pt-section sm:grid-rows-[max-content_1fr]">
				<div className="w-full sm:row-start-1 sm:row-span-2 col-start-1 col-end-2 ">
					<div className="w-screen sm:w-full-pg drop-shadow-lg -mx-pg sm:ml-0 sm:-mr-pg">
						<div className="-mx-[30vw] sm:ml-0 sm:-mr-[100vw] md:-mr-[70vw] xl:-mr-[30%] 2xl:mr-0">
							<ThemeSwap>
								<ThemeSwap.Img
									dark={HeroDark}
									light={HeroLight}
									alt="Computer desk mocukup"
									className="w-full"
									sizes="100vw"
									loading="lazy"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</ThemeSwap>
						</div>
					</div>
				</div>
				<div
					className={`text-center sm:text-left relative z-10 md:text-left
				row-start-1 col-start-1 col-end-2 self-start ${styles.heroTitle}`}
				>
					<h1 className="font-bold text-8xl sm:text-6xl md:text-5xl xl:text-5xl font-display">
						<small className="block text-[0.58em] md:whitespace-nowrap text-slate-900 dark:text-slate-50">
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
					className={`prose lg:prose-xl dark:prose-invert text-center sm:text-left max-w-none relative z-10 row-start-2 col-start-1 col-end-2  xl:pb-section sm:self-start md:pr-[50%] ${styles.heroText}`}
				>
					{!!home?.heroText && <Markdown content={home.heroText} />}
				</div>
			</div>
		</Section>
	);
}
