'use client';
import React, { useState } from 'react';

import Section from './section';
export default function About(): JSX.Element {
	return (
		<Section id="about" title="About Me" displayTitle="about" flag="verbose">
			<button className="btn">Button</button>
			<button className="btn btn-neutral">Neutral</button>
			<button className="btn btn-primary">Primary</button>
			<button className="btn btn-secondary">Secondary</button>
			<button className="btn btn-accent">Accent</button>

			<button className="btn btn-info">Info</button>
			<button className="btn btn-success">Success</button>
			<button className="btn btn-warning">Warning</button>
			<button className="btn btn-error">Error</button>
			<button className="btn btn-ghost">Ghost</button>
			<button className="btn btn-link">Link</button>
		</Section>
	);
}
