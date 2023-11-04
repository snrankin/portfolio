'use client';
import React, { HTMLProps } from 'react';
import { IProject } from '@/app/lib/interfaces';
import { ProjectsList } from '@/app/lib/projects';
import Project, { ProjectCardProps } from './item';
import { merge, omit, set } from 'lodash';
import classNames from 'classnames';

interface ProjectGroupProps extends HTMLProps<HTMLDivElement> {
	projectProps?: ProjectCardProps;
}

export default function ProjectsGroup(props: ProjectGroupProps): JSX.Element {
	var atts = omit(props, ['projectProps']);

	let classes = classNames('projects', 'list', props.className);

	set(atts, 'className', classes);
	let projects = ProjectsList.slice(0, 7);
	return (
		<div {...atts}>
			{projects.map((project: IProject) => {
				merge(project, props.projectProps);
				return <Project key={project.slug} {...project} />;
			})}
		</div>
	);
}
