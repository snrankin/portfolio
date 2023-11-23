'use client';
import React, { HTMLProps } from 'react';
import { simplifyUrl } from '@/lib/utils';
import { omit, set } from 'lodash';
import classNames from 'classnames';
import { TypePostFields } from '@/lib/types';
interface ProjectGroupProps extends HTMLProps<HTMLDivElement> {
	projects?: TypePostFields[];
}

export default function ProjectsGroup(props: ProjectGroupProps): JSX.Element {
	var atts = omit(props, ['projects']);

	let classes = classNames('projects', 'list', props.className);

	set(atts, 'className', classes);

	return (
		<div {...atts}>
			{!!props.projects &&
				props.projects.map((project: TypePostFields, i: number) => (
					<div key={i}>
						<h3 className="card-title text-base">
							{project.shortTitle}
						</h3>
						<p>
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
						</p>
					</div>
				))}
		</div>
	);
}
