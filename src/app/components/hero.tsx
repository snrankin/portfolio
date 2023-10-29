'use client';
import React, { useState } from 'react';
import Pattern from '@/img/circuit-primary.svg';
export default function Hero(): JSX.Element {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content w-full">
				<div>
					<h1 className="text-5xl font-bold">
						Hello there, <br />
						my name is Sam Rankin.
					</h1>
					<p className="py-6">I make the web beautiful and accessible across all screen sizes.</p>
					<button className="btn btn-primary">See My Work</button>
					<button className="btn btn-secondary">Download My Resume</button>
				</div>
				<div>
					<Pattern />
				</div>
			</div>
		</div>
	);
}
