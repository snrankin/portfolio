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
	const url = new URL(src);
	// url.searchParams.set('fm', 'webp');
	url.searchParams.set('w', `${width || 2000}`);
	url.searchParams.set('q', (quality || 75).toString());
	return url.href;
};

export default function ContentfulImage(props: ImageProps) {
	return (
		// eslint-disable-next-line
		<Image loader={contentfulLoader} {...props} />
	);
}
