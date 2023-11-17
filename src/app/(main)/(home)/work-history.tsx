'use client';
import React from 'react';
import Timeline from '@/components/timeline/group';
import Section from '@/components/section/section';
import { TypeJobsSectionFields } from '@/lib/types';
export default function WorkHistory(
	props?: TypeJobsSectionFields
): JSX.Element {
	return (
		<Section
			id={`${props?.slug}`}
			title={`${props?.title}`}
			command={`${props?.command}`}
			argument={`${props?.argument}`}
			flags={props?.flags}
			intro={props?.intro}
		>
			<Timeline jobs={props?.jobsCollection?.items} />
		</Section>
	);
}
