'use client';

import { omit } from 'lodash';
import Image, { ImageProps } from 'next/image';

export interface ContentfulImage extends ImageProps {
	format?: 'jpg' | 'jpg_progressive' | 'png' | 'png8' | 'webp';
	fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
	focus?:
		| 'top'
		| 'right'
		| 'left'
		| 'bottom'
		| 'top_right'
		| 'top_left'
		| 'bottom_right'
		| 'bottom_left'
		| 'face'
		| 'faces';
}

const contentfulLoader = ({
	src,
	width,
	quality,
	height,
	format,
	fit,
	focus,
}: {
	src: string;
	width?: number;
	height?: number;

	quality?: number;
	format?: 'jpg' | 'jpg_progressive' | 'png' | 'png8' | 'webp';
	fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
	focus?:
		| 'top'
		| 'right'
		| 'left'
		| 'bottom'
		| 'top_right'
		| 'top_left'
		| 'bottom_right'
		| 'bottom_left'
		| 'face'
		| 'faces';
}) => {
	const url = new URL(src);
	// url.searchParams.set('fm', 'webp');
	url.searchParams.set('w', `${width || 2000}`);
	if (!!height) {
		url.searchParams.set('h', height.toString());
	}
	url.searchParams.set('q', (quality || 75).toString());
	if (!!format) {
		url.searchParams.set('fm', format);
	}
	if (!!fit) {
		url.searchParams.set('fit', fit);
	}
	if (!!focus) {
		url.searchParams.set('f', focus);
	}
	return url.href;
};

export default function ContentfulImage(props: ContentfulImage) {
	return (
		// eslint-disable-next-line
		<Image loader={contentfulLoader} {...props} />
	);
}
