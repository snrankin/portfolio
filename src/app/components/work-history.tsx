'use client';
import React from 'react';
import { default as resume } from '@/app/data/resume.json';
import TimelineItem from './timeline-item';
import Heading from './heading';
export default function Timeline(): JSX.Element {
	return (
		<section id="work-history">
			<div className="container mx-auto">
				<Heading title="Work History" displayTitle="work" flag="history" />
				<ol className="border-l-2 border-info-100">
					{resume.work.map((job, i) => {
						return (
							<li key={i}>
								<TimelineItem {...job} />
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}
