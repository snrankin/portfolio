'use client';
import React, { HTMLProps } from 'react';
import { IProject } from '@/app/lib/interfaces';
import { ProjectsList } from '@/app/lib/projects';
import Project, { ProjectCardProps } from './card';
import { merge, omit } from 'lodash';

interface ProjectGroupProps extends HTMLProps<HTMLDivElement> {
	projectProps?: ProjectCardProps;
}

export default function ProjectsGroup(props: ProjectGroupProps): JSX.Element {
	var atts = omit(props, ['projectProps']);
	return (
		<div {...atts}>
			{ProjectsList.map((project: IProject) => {
				merge(project, props.projectProps);
				return <Project key={project.slug} {...project} />;
			})}
		</div>
	);
}
