'use client';
import React, { HTMLProps } from 'react';
import { IJob } from '@/lib/api/jobs';
import TimelineItem from './print-item';
export default function Timeline({ jobs }: { jobs?: IJob[] }): JSX.Element {
	return (
		<div className="flex flex-col gap-y-[0.5in]">
			{!!jobs &&
				jobs.map((job, i) => {
					return <TimelineItem key={i} {...job} />;
				})}
		</div>
	);
}
