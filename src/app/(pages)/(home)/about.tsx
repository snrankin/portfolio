'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Section from '../../components/section/section';
import MeImg from '@/img/Me.png';
import ImgFrame from '@/img/frame.svg';
import { Me } from '@/app/lib/me';
export default function About(): JSX.Element {
	return (
		<Section
			id="about"
			title="About Me"
			command="$(whoami)"
			flags="verbose"
		>
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-11">
				<div className="relative">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							src={MeImg}
							alt="Profile picture of Sam Rankin"
							className="w-full h-auto mask mask-diamond grayscale"
							loading="lazy"
							fill={true}
						/>
					</div>
					<div className="absolute w-full h-full inset-0 flex">
						<ImgFrame classNames="block w-full h-full grow" />
					</div>
				</div>
				<div className="prose-lg max-w-none">
					{Me.about?.map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</div>
			</div>
		</Section>
	);
}
