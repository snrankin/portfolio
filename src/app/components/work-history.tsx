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
			<ol className=" grid grid-cols-[max-content] gap-0 justify-center items-center">
				{resume.work.map((job, i) => {
					return (
						<li key={i}>
							<TimelineItem {...job} />
						</li>
					);
				})}
			</ol>
		</Section>
	);
}
