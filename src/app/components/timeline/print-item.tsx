import React from 'react';

import Image from 'next/image';

import { displayDate } from '@/app/lib/utils';
import { getIconString } from '@/app/lib/icons';
import { uniq } from 'lodash';
import Icon from '../icons/icon-item';
import { IPosition } from '@/app/lib/interfaces';

import { HighlightList, companyLink } from './item';
import { paramCase } from 'change-case-all';

export default function TimelineItem(props: IPosition) {
	let {
		company,
		position,
		startDate,
		endDate,
		highlights,
		summary,
		url,
		location,
	} = props;

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
							{position}{' '}
							<span className="block">
								<span className="sr-only">at </span>
								{companyLink(company, url)}
							</span>
						</h3>

						<HighlightList highlights={highlights} />
					</div>
				</div>
			</div>
		</div>
	);
}
