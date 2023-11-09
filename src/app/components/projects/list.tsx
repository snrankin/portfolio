'use client';
import React, { HTMLProps } from 'react';
import { IProject } from '@/app/lib/interfaces';
import { ProjectsList } from '@/app/lib/projects';
import { displayDate, simplifyUrl } from '@/app/lib/utils';
import { filter, indexOf, isString, merge, omit, pick, set } from 'lodash';
import classNames from 'classnames';

interface ProjectGroupProps extends HTMLProps<HTMLUListElement> {
	projects: string | string[];
}

export default function ProjectsGroup(props: ProjectGroupProps): JSX.Element {
	var atts = omit(props, ['projects']);

	let classes = classNames('projects', 'list', props.className);

	set(atts, 'className', classes);
	let projects = isString(props.projects)
		? props.projects.split(',')
		: props.projects;

	let projectList = filter(
		ProjectsList,
		(i: IProject) => indexOf(projects, i.slug) != -1
	);
	return (
		<ul {...atts}>
			{projectList.map((project: IProject, i: number) => (
				<li key={i}>
					<span className="block font-display font-bold">
						{project.shortTitle}
					</span>
					{project.url != undefined ? (
						<a href={project.url} target="_blank" className="block">
							{simplifyUrl(project.url)}
						</a>
					) : null}
					{project.repo != undefined && project.url == undefined ? (
						<a
							href={project.repo}
							target="_blank"
							className="block"
						>
							{simplifyUrl(project.url)}
						</a>
					) : null}
				</li>
			))}
		</ul>
	);
}
