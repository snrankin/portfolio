'use client';
import React, { HTMLProps } from 'react';
import { IProject } from '@/lib/api/projects';
import ProjectCard, { ProjectCardProps } from './card';
import { merge, omit } from 'lodash';

interface ProjectGroupProps extends HTMLProps<HTMLDivElement> {
	projectProps?: ProjectCardProps;
	projects?: IProject[];
}

export default function ProjectsGroup(props: ProjectGroupProps) {
	var atts = omit(props, ['projectProps', 'projects']);
	let projects = props.projects;

	return (
		<div {...atts}>
			{!!projects &&
				projects.map((project: IProject) => {
					merge(project, props.projectProps);
					return <ProjectCard key={project.slug} {...project} />;
				})}
		</div>
	);
}
