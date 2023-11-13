import React from 'react';

import { displayDate } from '@/lib/utils';
import { Markdown } from '@/components/contentful/markdown';
import { IJob } from '@/lib/api/jobs';
import { companyLink } from './item';
import { paramCase } from 'change-case-all';

export default function TimelineItem(props: IJob) {
	const { company, title, startDate, endDate, website, description } = props;

	return (
		<div className={`timeline-item job-${paramCase(company)}`}>
			<div className="grid grid-cols-[1rem_1fr] gap-x-5 w-full max-w-full">
				<div className="flex flex-col h-full">
					<div className="font-display uppercase font-black text-gray-400 leading-none whitespace-nowrap flex flex-col grow  h-full gap-4">
						<div className="h-[80px] flex items-end">
							<div className="-rotate-90 translate-x-1/4 origin-bottom-left">
								{displayDate(endDate)}
							</div>
						</div>

						<div className="flex flex-col grow items-center">
							<span className="w-0 border-[0.5px] border-gray-200 grow"></span>
						</div>

						<div className="h-[80px] flex items-end">
							<div className="-rotate-90 translate-x-1/4 origin-bottom-left">
								{displayDate(startDate)}
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-content">
					<div className="prose max-w-full w-auto">
						<h3 className="text-teal-600 font-sans font-semibold block">
							{title}{' '}
							<span className="block">
								<span className="sr-only">at </span>
								{companyLink(company, `${website}`)}
							</span>
						</h3>
						{!!description && <Markdown content={description} />}
					</div>
				</div>
			</div>
		</div>
	);
}
