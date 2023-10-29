'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Section from './section';
import MeColor from '@/img/me-color.jpeg';
import MeBW from '@/img/me-bw.png';
export default function About(): JSX.Element {
	return (
		<Section id="about" title="About Me" displayTitle="about" flag="verbose">
			<div className="flex items-center prose">
				<div className="xl:w-4/12 relative">
					<Image
						src={MeBW}
						alt="Black and white profile picture of Sam Rankin"
						className="w-full h-auto"
						style={{
							width: '100%',
							height: 'auto',
						}}
						loading="lazy"
					/>
				</div>
				<div>
					<p>
						Technology has always been a passion of mine. I love the constant change because I love learning new things and pushing the limits of what`&apos;`s possible. And with how much technology has become integral to our
						society, I feel like I`&apos;`m part of something bigger when I create a website or a tool that helps a client, a coworker, or even myself in the future.
					</p>
					<p>As a web developer, I see it as my responsibility to make my work as beautiful, intuitive, and accessible as I possible can, no matter the screen size.</p>
				</div>
			</div>
		</Section>
	);
}
