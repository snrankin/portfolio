'use client';

import { merge } from 'lodash';

import { Markdown } from '@/components/contentful/markdown';
import IconLink from '@/components/icons/link';
import Section from '@/components/section/section';
import { TypeCtaSectionFields } from '@/lib/types';

import styles from './home.module.css';

export default function Cta(props?: TypeCtaSectionFields): JSX.Element {
	const colors = ['btn-primary', 'btn-secondary', 'btn-success'];
	return (
		<Section
			id={`${props?.slug}`}
			className={`${styles.ctaBg} bg-base-200 dark:bg-slate-900`}
			containerClasses="py-[15vw]"
		>
			{!!props?.content && (
				<div className="prose prose-2xl md:max-w-[70%] lg:prose-lg prose-h2:text-5xl sm:prose-h2:text-6xl md:prose-h2:text-4xl xl:prose-h2:text-4xl text-center mx-auto">
					<Markdown content={props.content} />
				</div>
			)}
			{!!props?.links && (
				<div className="flex justify-center items-center gap-3">
					{props?.links.map((profile, k) => {
						merge(profile, {
							titleDisplay: 'popover',
							className: `btn btn-circle btn-lg h-[4rem] text-[1.5rem] !flex ${colors[k]}`,
						});
						return <IconLink {...profile} key={k} />;
					})}
				</div>
			)}
		</Section>
	);
}
