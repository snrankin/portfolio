'use client';
import React from 'react';
import { default as resume } from '@/app/data/resume.json';
import TimelineItem from './timeline-item';
import Heading from './heading';

import Section from './section';
export default function Timeline(): JSX.Element {
	return (
		<Section
			id="work-history"
			title="Work"
			command="ls"
			argument="work"
			flags="history"
		>
			<div className="w-full grid grid-cols-1 lg:grid-cols-[max-content] gap-0 justify-center items-center">
				{resume.work.map((job, i) => {
					return <TimelineItem key={i} {...job} />;
				})}
			</div>
		</Section>
	);
}
