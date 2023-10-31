'use client';
import React, { useState } from 'react';
import Section from './section';
export default function Hero(): JSX.Element {
	return (
		<Section
			id="hello"
			title="Hello"
			command="$(whoami)"
			flags="include=tagline"
			className="hero min-h-screen bg-base-200"
		>
			<div className="hero-content w-full">
				<div className="text-center lg:prose-xl">
					<h1 className="text-5xl font-bold">
						Hi there, <br />
						my name is Sam Rankin.
					</h1>
					<p className="py-6">
						{
							"I'm not just about pixels and code. I'm about crafting digital spaces that feel right and bring a bit of joy. Let's team up and create some seriously awesome stuff together."
						}
					</p>
					<button className="btn btn-primary">See My Work</button>
					<button className="btn btn-secondary">
						Download My Resume
					</button>
				</div>
			</div>
		</Section>
	);
}
