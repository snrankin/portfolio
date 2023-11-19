'use client';
import React, { HTMLProps } from 'react';
import ProjectCard, { ProjectCardProps } from './card';
import { merge, omit } from 'lodash';
import { TypePostCardFields } from '@/lib/types';

interface ProjectGroupProps extends HTMLProps<HTMLDivElement> {
	projectProps?: Omit<ProjectCardProps, 'slug'>;
	projects?: TypePostCardFields[];
}

export default function ProjectsGroup(props: ProjectGroupProps) {
	var atts = omit(props, ['projectProps', 'projects']);
	let projects = props.projects;

	return (
		<div {...atts}>
			{!!projects &&
				projects.map((project: TypePostCardFields) => {
					merge(project, props.projectProps);
					return <ProjectCard key={project.slug} {...project} />;
				})}
		</div>
	);
}
