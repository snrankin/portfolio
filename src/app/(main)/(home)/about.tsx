'use client';

import ContentfulImage from '@/components/contentful/contentful-image';
import { Markdown } from '@/components/contentful/markdown';
import Section from '@/components/section/section';
import Frame from '@/img/frame.svg';
import { TypeAboutSectionFields } from '@/lib/types';

import styles from './home.module.css';

export default function About(props?: TypeAboutSectionFields): JSX.Element {
	return (
		<Section
			id={`${props?.slug}`}
			title={`${props?.title}`}
			command={`${props?.command}`}
			argument={`${props?.argument}`}
			flags={props?.flags}
			intro={props?.intro}
		>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-11">
				{!!props?.image && (
					<div className="relative w-4/6 mx-auto md:w-full">
						<div className="absolute w-full h-full inset-0 flex">
							<Frame className="block w-full h-full grow stroke-[20px] md:stroke-[15px]" />
						</div>
						<div className="aspect-w-1 aspect-h-1">
							<ContentfulImage
								src={props.image.url}
								className={`w-full h-auto mask ease-in-out duration-300 grayscale will-change-auto hover:grayscale-0 ${styles.profileMask}`}
								loading="lazy"
								fill={true}
								alt={`${props.image.description}`}
							/>
						</div>
					</div>
				)}
				{!!props?.content && (
					<div className="prose lg:prose-lg max-w-none">
						<Markdown content={props.content} />
					</div>
				)}
			</div>
		</Section>
	);
}
