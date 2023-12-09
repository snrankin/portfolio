'use client';

import TimelineItem, { TimelineItemProps } from './print-basic-item';

export default function Timeline({
	items,
}: {
	items?: TimelineItemProps[];
}): JSX.Element {
	return (
		<div className="grid grid-cols-1 gap-[0.25in]">
			{!!items &&
				items.map((item, i) => {
					if (item.startDate)
						return <TimelineItem key={i} {...item} />;
				})}
		</div>
	);
}
