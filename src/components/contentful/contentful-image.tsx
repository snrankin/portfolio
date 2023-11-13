'use client';

import Image, { ImageProps } from 'next/image';

const contentfulLoader = ({
	src,
	width,
	quality,
}: {
	src: string;
	width?: number;
	quality?: number;
}) => {
	return `${src}?w=${width || 2000}&q=${quality || 75}`;
};

export default function ContentfulImage(props: ImageProps) {
	return (
		// eslint-disable-next-line
		<Image loader={contentfulLoader} {...props} />
	);
}
