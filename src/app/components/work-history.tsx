'use client';
import React from 'react';
import { default as resume } from '@/app/data/resume.json';
import TimelineItem from './timeline-item';
import Heading from './heading';

import Section from './section';
export default function Timeline(): JSX.Element {
	return (
		<Section id="work-history" title="Work" displayTitle="work" flag="history">
			<ol className="border-l-2 border-info-100 grid grid-cols-1 gap-10">
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
