'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Section from '@/app/components/section/section';
import ThemeSwap from '@/app/components/theme-swap/theme-swap';
import MeImg from '@/img/Me.png';
import DarkFrame from '@/img/frame-dark.svg';
import LightFrame from '@/img/frame-light.svg';
import { Me } from '@/app/lib/me';
export default function About(): JSX.Element {
	return (
		<Section
			id="about"
			title="About Me"
			command="$(whoami)"
			flags="verbose"
		>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-11">
				<div className="relative">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							src={MeImg}
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
				<div className="prose lg:prose-lg max-w-none">
					{Me.about?.map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</div>
			</div>
		</Section>
	);
}
