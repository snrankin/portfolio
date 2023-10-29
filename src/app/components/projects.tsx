'use client';
import React, { useState } from 'react';

import Section from './section';
import DeviceTabs from './tabs';
export default function Projects(): JSX.Element {
	return (
		<Section id="projects" title="Featured Projects" displayTitle="projects" flag="featured">
			<DeviceTabs />
		</Section>
	);
}
