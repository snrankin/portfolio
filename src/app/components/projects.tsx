'use client';
import React, { useState } from 'react';

import Section from './section';
import DeviceTabs from './tabs';
export default function Projects(): JSX.Element {
	return (
		<Section
			id="projects"
			title="Featured Projects"
			command="ls"
			argument="projects"
			flags="featured"
		>
			<DeviceTabs />
		</Section>
	);
}
