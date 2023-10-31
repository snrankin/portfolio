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
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-4">
				<div className="relative">
					<div className="grid grid-cols-9 grid-rows-9">
						{/* <div className="border relative overflow-hidden col-span-9 row-span-9 md:row-span-4 md:col-span-4 row-start-1 col-start-1 aspect-h-1 aspect-w-1">
							<svg
								className="w-10 h-10 text-gray-200 dark:text-gray-600"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 18"
								style={{ width: '100%', height: 'auto' }}
							>
								<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
							</svg>
						</div> */}
						<div className="border relative overflow-hidden col-span-9 row-span-9  aspect-h-1 aspect-w-1">
							<Image
								src={MeBW}
								alt="Black and white profile picture of Sam Rankin"
								className="w-full h-auto !m-0"
								loading="lazy"
								style={{ width: '100%', height: 'auto' }}
							/>
							{/* <div className="absolute w-full left-0 top-auto bottom-[-1px] h-[40%] bg-gradient-to-t from-base-100"></div> */}
						</div>
					</div>
				</div>
				<div className="prose max-w-none">
					<p>
						{
							"I've been immersed in the ever-changing landscape of the digital realm (professionally) since 2010. My journey has had me mostly focused on WordPress, but I'm confident in my ability to pick up any platform or language."
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
				</div>
			</div>
		</Section>
	);
}
