'use client';
import React, { useContext } from 'react';

import Section from '@/components/section/section';

import { HeaderContext } from '@/lib/context/header';
import { TypePostFields } from '@/lib/types';
import classNames from 'classnames';
import ProjectImage from '@/components/projects/image';
import ProjectLinks from '@/components/projects/links';
import ProjectSkills from '@/components/projects/skills';
export default function Hero(props?: TypePostFields): JSX.Element {
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
		'md:grid-rows-[max-content_1fr]',
		'items-end',
		'gap-section',
		'md:gap-12',
		'lg:gap-x-0',
		'lg:gap-y-8',
		'pt-section',
		{
			'md:grid-cols-2': useImage || useGrid,
		}
	);
	const headerCtx: {
		height: number;
	} = useContext(HeaderContext);
	return (
		<Section
			id="hero"
			className={`hero !block pt-24 !pb-0  overflow-hidden pattern-bg`}
			style={{ paddingTop: `${headerCtx.height}px` }}
			containerClasses={wrapperClasses}
		>
			<div className="text-center prose xl:prose-xl lg:text-left md:col-start-1 md:row-start-1 md:col-span-2 lg:col-span-1">
				<div className="prose dark:prose-invert">
					<h1 className="!leading-tight">{props?.title}</h1>
					<div className="flex gap-2 flex-wrap justify-center lg:justify-start">
						<ProjectSkills
							skillCollection={props?.skillCollection}
						/>
					</div>
				</div>
			</div>
			<div className="text-center prose xl:prose-xl md:text-left md:col-start-1 md:row-start-2 self-start lg:pb-section">
				<div className="prose dark:prose-invert">
					{!!props?.summary && (
						<p className="lead !mt-0">{props?.summary}</p>
					)}
					<ProjectLinks repo={props?.repo} website={props?.website} />
				</div>
			</div>
			{(useImage || useGrid) && !!props && (
				<div className="md:col-start-2 md:row-start-2 lg:row-span-2 lg:row-start-1">
					<div className="md:w-full-pg md:-mr-pg">
						<ProjectImage {...props} />
					</div>
				</div>
			)}
		</Section>
	);
}
