import { Content, Markdown } from '@/components/contentful/markdown';

import Date from '../global/date';

export interface TimelineItemProps {
	title: string;
	subtitle: string;
	startDate: string;
	endDate?: string;
	isCurrent: boolean;
	description?: Content;
}

export default function TimelineItem({
	title,
	subtitle,
	startDate,
	endDate,
	isCurrent,
	description,
}: TimelineItemProps) {
	return (
		<div className="prose max-w-full w-full">
			<div className="flex justify-between items-center">
				<h3>{title}</h3>
				<div className="leading-none text-[10pt] font-bold ">
					<Date
						start={startDate}
						end={endDate}
						dashClasses="font-light"
						isCurrent={isCurrent}
					/>
				</div>
			</div>
			<p className="italic mt-2">{subtitle}</p>
			{!!description && <Markdown content={description} />}
		</div>
	);
}
