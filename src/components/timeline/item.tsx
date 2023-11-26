import { trim } from 'lodash';
import Image from 'next/image';

import { Markdown } from '@/components/contentful/markdown';
import { NDASH, NOBREAK } from '@/lib/symbols';
import { TypeJobFields } from '@/lib/types';

import Date from '../global/date';
import Icon from '../icons/icon-item';

export function companyLink(name: string, url: string) {
	let favicon = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=32`;

	return (
		<a
			href={url}
			className="italic leading-none flex items-center font-sans no-underline gap-2 mt-4"
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

export default function TimelineItem(props: TypeJobFields) {
	const { company, title, startDate, endDate, website, description } = props;
	const date = () => {
		return (
			<>
				<Date start={startDate} />
				{NOBREAK}
				<span className="font-light">{NDASH}</span>
				{NOBREAK}
				<Date start={endDate} />
			</>
		);
	};
	return (
		<>
			<div className="relative lg:flex lg:justify-end lg:items-start">
				<span className="w-0 border-[1px] border-base-300 absolute top-0 left-2/4 -translate-x-2/4 h-full hidden md:block lg:left-auto lg:right-[1.15rem]"></span>
				<span className="inline-flex lg:flex-row-reverse items-center relative z-10 leading-[2ex] bg-primary rounded-full gap-2 py-2 px-3 md:py-1">
					<Icon
						className="leading-[2ex] h-[1em]"
						icon="calendar"
						iconClasses="stroke-2"
					/>
					<div
						className={`md:leading-8 font-display uppercase leading-none text-sm font-black block whitespace-nowrap`}
					>
						<Date start={startDate} />
						{NOBREAK}
						<span className="font-light">{NDASH}</span>
						{NOBREAK}
						<Date start={endDate} />
					</div>
				</span>
			</div>
			{/* Content */}
			<div
				className={`timeline-content last:pb-0 md:pt-[3em] pb-4 md:pb-6 lg:pb-11 lg:mt-0 lg:pt-0`}
			>
				<div className="prose">
					<h3 className="font-semibold block mt-3 lg:mt-0">
						<span className="flex items-center lg:min-h-[40px] align-middle">
							{title}{' '}
						</span>
						<span className="block text-[0.75em]">
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
