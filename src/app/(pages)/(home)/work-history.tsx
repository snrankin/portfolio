'use client';
import React from 'react';
import Timeline from '@/app/components/timeline/group';

import Section from '@/app/components/section/section';
export default function WorkHistory(): JSX.Element {
	return (
		<Section
			id="work-history"
			title="Work"
			command="ls"
			argument="work"
			flags="history"
		>
			<Timeline />
		</Section>
	);
}
