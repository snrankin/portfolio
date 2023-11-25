import React from 'react';

import { displayDate } from '@/lib/utils';
import { Markdown } from '@/components/contentful/markdown';
import { companyLink } from './item';
import Icon from '../icons/icon-item';
import { paramCase } from 'change-case-all';
import { TypeJobFields } from '@/lib/types';
import Date from '../global/date';
import { NDASH, NOBREAK } from '@/lib/symbols';
export default function TimelineItem(props: TypeJobFields) {
	const { company, title, startDate, endDate, website, description } = props;

	return (
		<li>
			<div className="timeline-middle">
				<Icon
					icon="calendar"
					iconClasses="stroke-2 text-primary-600 leading-none"
				/>
			</div>
			<div className="font-display uppercase leading-none text-[10pt] font-black text-slate-950 row-start-2 col-start-3 w-full pl-[0.25in]">
				<Date start={startDate} />
				{NOBREAK}
				<span className="font-light">{NDASH}</span>
				{NOBREAK}
				<Date start={endDate} />
			</div>
			<div className="timeline-end timeline-box rounded-0 border-0 shadow-none bg-transparent m-0 py-0 pr-0 pl-[0.25in] !row-start-3 !row-span-1">
				<div className="prose mt-[0.25in] pb-[0.5in] max-w-full w-auto">
					<h3>
						{title}{' '}
						<span className="block text-[0.8em]">
							<span className="sr-only">at </span>
							{companyLink(company, `${website}`)}
						</span>
					</h3>
					{!!description && <Markdown content={description} />}
				</div>
			</div>
			<hr className="!w-[1px]" />
		</li>
	);
}
