import React, { useState } from 'react';
import Section from '@/components/section/section';
import { IAuthor } from '@/lib/api/authors';
import { IProject } from '@/lib/api/projects';
import ProjectsGroup from '@/components/projects/grid';
import { TypeProjectsSectionFields, TypePostFields } from '@/lib/types';
export default function Projects(
	props?: TypeProjectsSectionFields
): JSX.Element {
	return (
		<Section
			id={`${props?.slug}`}
			title={`${props?.title}`}
			command={`${props?.command}`}
			argument={`${props?.argument}`}
			flags={props?.flags}
			intro={props?.intro}
			className="bg-base-200"
		>
			<ProjectsGroup
				projectProps={{
					compact: true,
					className: 'bg-base-100 shadow',
				}}
				projects={props?.projectsCollection?.items}
				className="grid gap-6 lg:gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
			/>
		</Section>
	);
}
