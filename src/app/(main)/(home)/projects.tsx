import React, { useState } from 'react';
import Section from '@/components/section/section';
import { IAuthor } from '@/lib/api/authors';
import { IProject } from '@/lib/api/projects';
import ProjectsGroup from '@/components/projects/grid';
export default function Projects({
	projects,
	intro,
}: {
	projects?: IProject[];
	intro?: string;
}): JSX.Element {
	return (
		<Section
			id="projects"
			title="Featured Projects"
			command="ls"
			argument="projects"
			flags="featured"
			className="bg-base-200"
			intro={intro}
		>
			<ProjectsGroup
				projectProps={{
					compact: true,
					className: 'bg-base-100 shadow',
				}}
				projects={projects}
				className="grid gap-6 lg:gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
			/>
		</Section>
	);
}
