'use client';
import React, { useState } from 'react';
import Section from '@/app/components/section/section';
import Device from '@/app/components/device/device';
import { Me } from '@/app/lib/me';
import PlaceholderImage from '@/img/placeholder.svg';

import DesktopWireframe from '@/img/desktop-wireframe.svg';
import LaptopWireframe from '@/img/laptop-wireframe.svg';
import TabletWireframe from '@/img/tablet-wireframe.svg';
import MobileWireframe from '@/img/mobile-wireframe.svg';
export default function Hero(): JSX.Element {
	return (
		<Section className="hero bg-base-200 pt-24 !pb-0  overflow-hidden">
			<div className="hero-content p-0 w-full flex flex-col md:flex-row">
				<div className="text-center prose lg:prose-xl md:text-left md:w-2/4">
					<h1 className="font-bold font-display">
						<small>
							Hi there, <br />
							my name is
						</small>{' '}
						<br />
						<span className="text-secondary-500">
							{Me.firstName} {Me.lastName}
						</span>
						.
					</h1>
					<p className="lead">
						I am a {Me.location?.city},{' '}
						<abbr title={Me.location?.locality}>
							{Me.location?.localityCode}
						</abbr>{' '}
						based {Me.label}. But {Me.summary}
					</p>
					<div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
						<button className="btn btn-primary">See My Work</button>
						<button className="btn btn-secondary">
							Download My Resume
						</button>
					</div>
				</div>
				<div className="md:w-2/4">
					<div className="md:w-full-pg drop-shadow-lg md:-mr-pg 2xl:mr-0 2xl:w-full">
						<div className="grid grid-cols-12 grid-rows-10 md:-mr-[33%] relative">
							<Device
								type="desktop"
								className="flex w-full col-span-8 row-span-10 col-start-3"
							>
								<svg className="w-full h-full dark:hidden">
									<use
										href={`/wireframes-sprite.svg#wireframe-desktop-light `}
									/>
								</svg>
								<svg className="w-full h-full hidden dark:block">
									<use
										href={`/wireframes-sprite.svg#wireframe-desktop-dark `}
									/>
								</svg>
							</Device>
							{/* Laptop */}
							<Device
								type="laptop"
								className="flex absolute left-0 bottom-0 h-[54.26%] z-10"
							>
								<svg className="w-full h-full dark:hidden">
									<use
										href={`/wireframes-sprite.svg#wireframe-laptop-light `}
									/>
								</svg>
								<svg className="w-full h-full hidden dark:block">
									<use
										href={`/wireframes-sprite.svg#wireframe-laptop-dark `}
									/>
								</svg>
							</Device>
							{/* Tablet */}
							<Device
								type="tablet"
								className="flex absolute right-0 bottom-0 h-[53.32%] z-10"
							>
								<svg className="w-full h-full dark:hidden">
									<use
										href={`/wireframes-sprite.svg#wireframe-tablet-light `}
									/>
								</svg>
								<svg className="w-full h-full hidden dark:block">
									<use
										href={`/wireframes-sprite.svg#wireframe-tablet-dark `}
									/>
								</svg>
							</Device>
							{/* Mobile */}
							<Device
								type="mobile"
								className="flex absolute right-[20%] bottom-0 h-[31.04%] z-20"
							>
								<svg className="w-full h-full dark:hidden">
									<use
										href={`/wireframes-sprite.svg#wireframe-mobile-light `}
									/>
								</svg>
								<svg className="w-full h-full hidden dark:block">
									<use
										href={`/wireframes-sprite.svg#wireframe-mobile-dark `}
									/>
								</svg>
							</Device>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
