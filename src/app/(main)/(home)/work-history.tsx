'use client';
import React from 'react';
import Timeline from '@/components/timeline/group';
import { IJob } from '@/lib/api/jobs';
import Section from '@/components/section/section';
export default function WorkHistory({
	jobs,
	intro,
}: {
	jobs?: IJob[];
	intro?: string;
}): JSX.Element {
	return (
		<Section
			id="work-history"
			title="Work"
			command="ls"
			argument="work"
			flags="history"
			intro={intro}
		>
			<Timeline jobs={jobs} />
		</Section>
	);
}
