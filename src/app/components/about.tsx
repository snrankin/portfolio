'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Section from './section';
import MeColor from '@/img/me-color.jpeg';
import MeBW from '@/img/me-bw.png';
export default function About(): JSX.Element {
	return (
		<Section
			id="about"
			title="About Me"
			command="$(whoami)"
			flags="verbose"
		>
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
						{
							"I'm a full-stack developer navigating the ever-changing landscape of the web since 2010. My journey has had me mostly focused on WordPress, but I'm confident in my ability to pick up any platform or language."
						}
					</p>

					<p>
						{
							"I'm all about making websites feel like home—responsive, accessible, and super intuitive for every visitor. But it's not just about code; it's about creating a digital space that speaks volumes while being flawlessly functional."
						}
					</p>

					<p>
						{
							"When I'm not diving into code, you’ll find me nose-deep in a book, spreading smiles as a therapy dog team with my corgi, Zoey, catching the excitement at Arizona Diamondbacks games, or getting my hands messy in art classes."
						}
					</p>

					<p>
						{
							"I'm not just about pixels and code. I'm about crafting digital spaces that feel right and bring a bit of joy. Let's team up and create some seriously awesome stuff together."
						}
					</p>
				</div>
			</div>
		</Section>
	);
}
