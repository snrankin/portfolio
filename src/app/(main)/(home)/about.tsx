'use client';
import React from 'react';
import ContentfulImage from '@/components/contentful/contentful-image';
import { Markdown } from '@/components/contentful/markdown';
import Section from '@/components/section/section';
import ThemeSwap from '@/components/theme-swap/theme-swap';
import DarkFrame from '@/img/frame-dark.svg';
import LightFrame from '@/img/frame-light.svg';
import { IAuthor } from '@/lib/api/authors';
export default function About({ me }: { me: IAuthor }): JSX.Element {
	return (
		<Section
			id="about"
			title="About Me"
			command="$(whoami)"
			flags="verbose"
		>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-11">
				{!!me.picture && (
					<div className="relative">
						<div className="aspect-w-1 aspect-h-1">
							<ContentfulImage
								src={me.picture?.url}
								alt="Profile picture of Sam Rankin"
								className="w-full h-auto mask mask-diamond grayscale will-change-auto hover:grayscale-0"
								loading="lazy"
								fill={true}
								sizes="100vw"
							/>
						</div>
						<div className="absolute w-full h-full inset-0 flex">
							<ThemeSwap
								light={
									<DarkFrame className="block w-full h-full grow stroke-[20px] md:stroke-[15px]" />
								}
								dark={
									<LightFrame className="block w-full h-full grow stroke-[20px] md:stroke-[15px]" />
								}
							/>
						</div>
					</div>
				)}
				{!!me.about && (
					<div className="prose lg:prose-lg max-w-none">
						<Markdown content={me.about} />
					</div>
				)}
			</div>
		</Section>
	);
}
