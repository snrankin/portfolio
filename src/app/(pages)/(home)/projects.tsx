'use client';
import React, { useState } from 'react';
import { paramCase } from 'change-case-all';
import Section from '@/app/components/section/section';

import ProjectsGroup from '@/app/components/projects/grid';
import { ProjectCardProps } from '@/app/components/projects/card';
export default function Projects(): JSX.Element {
	var projectCardProps: ProjectCardProps = {
		compact: true,
		className: 'bg-base-100 shadow',
	};
	return (
		<Section
			id="projects"
			title="Featured Projects"
			command="ls"
			argument="projects"
			flags="featured"
			className="bg-base-200"
			intro="Welcome to the fun part! This is where I roll up my sleeves and dive into the projects that got me here. Get ready to see the real magic – where lines of code come to life and ideas turn into web reality. Let's take a journey through some cool stuff I've built!"
		>
			<ProjectsGroup
				className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
				projectProps={projectCardProps}
			/>
		</Section>
	);
}
