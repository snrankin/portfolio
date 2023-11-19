'use client';
import React, { useContext } from 'react';
import styles from './projects.module.css';
import Section from '@/components/section/section';

const HeroLight = require('@/img/hero-light.svg?url');
const HeroDark = require('@/img/hero-dark.svg?url');
import { HeaderContext } from '@/lib/context/header';
import Image from 'next/image';
import { titleCase } from 'change-case-all';
import { TypePostFields } from '@/lib/types';
import classNames from 'classnames';
import ProjectImage from '@/components/projects/image';
import ProjectLinks from '@/components/projects/links';
import ProjectSkills from '@/components/projects/skills';
export default function Hero(props?: TypePostFields): JSX.Element {
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

	let useGrid =
		!!props?.desktopPreview ||
		!!props?.mobilePreview ||
		!!props?.tabletPreview ||
		!!props?.laptopPreview;

	let useImage =
		props?.featuredImage != undefined &&
		props?.desktopPreview == undefined &&
		props?.laptopPreview == undefined &&
		props?.mobilePreview == undefined &&
		props?.tabletPreview == undefined;

	let wrapperClasses = classNames(
		'grid',
		'grid-cols-1',
		'gap-section',
		'pt-section',
		{
			'lg:grid-cols-2': useImage || useGrid,
		}
	);
	const headerCtx: {
		height: number;
	} = useContext(HeaderContext);
	return (
		<Section
			id="hero"
			className={`hero !block pt-24 !pb-0  overflow-hidden ${styles.heroBG}`}
			style={{ paddingTop: `${headerCtx.height}px` }}
			containerClasses={wrapperClasses}
		>
			<div className="text-center prose lg:prose-xl md:text-left md:col-start-2  md:row-start-1">
				<div className="prose dark:prose-invert">
					<h1>{props?.title}</h1>
					<div className="flex gap-2 flex-wrap justify-center md:justify-start">
						<ProjectSkills
							skillCollection={props?.skillCollection}
						/>
					</div>
					{!!props?.summary && (
						<p className="lead">{props?.summary}</p>
					)}
					<ProjectLinks repo={props?.repo} website={props?.website} />
				</div>
			</div>
			{(useImage || useGrid) && !!props && (
				<div className="md:col-start-1 md:row-start-1">
					<div className=" md:w-full-pg drop-shadow-lg lg:-ml-pg">
						<ProjectImage {...props} />
					</div>
				</div>
			)}
		</Section>
	);
}
