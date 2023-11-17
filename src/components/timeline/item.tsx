import React from 'react';
import Image from 'next/image';
import { displayDate } from '@/lib/utils';
import { trim } from 'lodash';
import Icon from '../icons/icon-item';
import { IPosition } from '@/lib/interfaces';
import { Markdown } from '@/components/contentful/markdown';
import { TypeJobFields } from '@/lib/types';
export function companyLink(name: string, url: string) {
	let favicon = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=32`;

	return (
		<a
			href={url}
			className="italic link leading-none flex items-center font-sans gap-2 no-underline link-primary text-lg mt-4"
			target="_blank"
		>
			<Image
				src={favicon}
				width={32}
				height={32}
				alt={`${trim(name)} website favicon`}
				style={{ width: '1em', height: '1em' }}
				className="m-0"
			/>
			{name}
		</a>
	);
}

export interface TimelineItemProps extends IPosition {
	index: number;
}
export default function TimelineItem(props: TypeJobFields) {
	const { company, title, startDate, endDate, website, description } = props;

	return (
		<>
			<div className="grid relative grid-cols-[1.5rem_1fr] md:grid-cols-[2rem_1fr] lg:grid-cols-[1fr_2rem] gap-x-1 md:gap-x-5 items-center md:items-stretch">
				{/* Icon */}
				<div
					className={`items-center justify-center  relative lg:col-start-2  lg:row-start-1`}
				>
					<span className="w-0 border-[1px] border-gray-200 absolute top-0 left-2/4 -translate-x-2/4 h-full hidden md:block"></span>
					<Icon
						icon="calendar"
						className="flex items-center w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] justify-center text-[1.2rem]  relative z-10 text-2xl leading-none bg-secondary-500 rounded-full py-1 text-gray-900"
						iconClasses="stroke-2"
					/>
				</div>
				{/* Date */}
				<div
					className={`md:leading-8 font-display uppercase leading-none text-neutral font-black block whitespace-nowrap lg:text-right lg:row-start-1`}
				>
					{displayDate(startDate, endDate)}
				</div>
			</div>
			{/* Content */}
			<div
				className={`timeline-content md:pt-[2em] pb-4 lg:pb-11 lg:mt-0 lg:pt-0`}
			>
				<div className="prose">
					<h3 className="font-semibold block">
						{title}{' '}
						<span className="block">
							<span className="sr-only">at </span>
							{companyLink(company, `${website}`)}
						</span>
					</h3>
					{!!description && <Markdown content={description} />}
				</div>
			</div>
		</>
	);
}
