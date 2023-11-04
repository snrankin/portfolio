'use client';
import React, { useState } from 'react';
import Section from '../../components/section/section';

import { Me } from '@/app/lib/me';
export default function Hero(): JSX.Element {
	return (
		<Section
			id="hello"
			title="Hello"
			command="$(whoami)"
			flags="include=tagline"
			className="hero bg-base-200 print:bg-white"
		>
			<div className="hero-content w-full">
				<div className="text-center prose-xl">
					<h1 className="text-5xl font-bold font-display">
						<small>Hi there, my name is</small> <br />
						<span className="text-pink-500">
							{Me.firstName} {Me.lastName}
						</span>
						.
					</h1>
					<h2>
						I am a {Me.location?.city},{' '}
						<abbr title={Me.location?.locality}>
							{Me.location?.localityCode}
						</abbr>{' '}
						based {Me.label}.
					</h2>
					<p className="py-6 text-lg">{Me.summary}</p>
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
