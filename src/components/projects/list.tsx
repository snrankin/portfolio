'use client';
import React, { HTMLProps } from 'react';
import { IProject } from '@/lib/interfaces';
import { ProjectsList } from '@/lib/projects';
import { displayDate, simplifyUrl } from '@/lib/utils';
import { filter, indexOf, isString, merge, omit, pick, set } from 'lodash';
import classNames from 'classnames';

interface ProjectGroupProps extends HTMLProps<HTMLUListElement> {
	projects: IProject[];
}

export default function ProjectsGroup(props: ProjectGroupProps): JSX.Element {
	var atts = omit(props, ['projects']);

	let classes = classNames('projects', 'list', props.className);

	set(atts, 'className', classes);

	return (
		<ul {...atts}>
			{props.projects.map((project: IProject, i: number) => (
				<li key={i}>
					<span className="block font-display font-bold">
						{project.shortTitle}
					</span>
					{!!project.website && (
						<a
							href={project.website}
							target="_blank"
							className="block"
						>
							{simplifyUrl(project.website)}
						</a>
					)}
					{!!project.repo && !project.website && (
						<a
							href={project.repo}
							target="_blank"
							className="block"
						>
							{simplifyUrl(project.website)}
						</a>
					)}
				</li>
			))}
		</ul>
	);
}
