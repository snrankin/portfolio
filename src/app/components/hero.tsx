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
				<div className="text-center prose-xl">
					<h1 className="text-5xl font-bold">
						<small>Hi there, my name is</small> <br />
						<span className="text-pink-500">Sam Rankin</span>.
					</h1>
					<h2>
						I am a Phoenix, <abbr title="Arizona">AZ</abbr> based
						full-stack web developer.
					</h2>
					<p className="py-6 text-lg">
						{
							"I'm not just about pixels and code. I'm about crafting digital spaces that feel right and bring a bit of joy. Let's team up and create some seriously awesome stuff together."
						}
					</p>
					<div className="flex flex-wrap gap-3 items-center justify-center">
						<button className="btn btn-primary">See My Work</button>
						<button className="btn btn-secondary">
							Download My Resume
						</button>
					</div>
				</div>
			</div>
		</Section>
	);
}
