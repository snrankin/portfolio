'use client';
import React, { HTMLProps } from 'react';
import { IProject } from '@/app/lib/interfaces';
import { ProjectsList } from '@/app/lib/projects';
import Project, { ProjectCardProps } from './card';
import { filter, indexOf, isString, merge, omit, pick, set } from 'lodash';

interface ProjectGroupProps extends HTMLProps<HTMLDivElement> {
	projectProps?: ProjectCardProps;
	projects: string | string[];
}

export default function ProjectsGroup(props: ProjectGroupProps): JSX.Element {
	var atts = omit(props, ['projectProps', 'projects']);

	let projects = isString(props.projects)
		? props.projects.split(',')
		: props.projects;

	let projectList = filter(
		ProjectsList,
		(i: IProject) => indexOf(projects, i.slug) != -1
	);
	return (
		<div {...atts}>
			{projectList.map((project: IProject) => {
				merge(project, props.projectProps);
				return <Project key={project.slug} {...project} />;
			})}
		</div>
	);
}
