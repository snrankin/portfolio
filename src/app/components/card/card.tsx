'use client';

import React, { HTMLProps } from 'react';

import { isEmpty, omit, set } from 'lodash';
import classNames from 'classnames';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface CardProps extends HTMLProps<HTMLDivElement> {
	title?: string;
	subtitle?: string;
	border?: boolean;
	imgBG?: boolean;
	compact?: boolean;
	bodyClasses?: string;
	titleClasses?: string;
	subtitleClasses?: string;
	imgClasses?: string;
	align?: 'left' | 'right' | 'center';
	image?: StaticImport;
	alt?: string;
}
export default function Card(props: CardProps): JSX.Element {
	let { title, subtitle, image, border, imgBG, compact, align, alt } = props;

	let attr: HTMLProps<HTMLDivElement> = omit(props, [
		'title',
		'subtitle',
		'border',
		'imgBG',
		'image',
		'compact',
		'bodyClasses',
		'imgClasses',
		'titleClasses',
		'subtitleClasses',
		'align',
		'alt',
	]);

	let cardClasses = classNames('card', 'bg-base-100', props.className, {
		'card-bordered': border,
		'image-full': imgBG,
		'card-normal': !compact,
		'card-compact': compact,
	});

	set(attr, 'className', cardClasses);

	let imgClasses = classNames('card-img', props.imgClasses);

	let bodyClasses = classNames('card-body', props.bodyClasses, {
		'items-center': align == 'center',
		'text-center': align == 'center',
		'items-start': align == 'left',
		'text-left': align == 'left',
		'items-end': align == 'right',
		'text-right': align == 'right',
	});
	let titleClasses = classNames('card-title', props.titleClasses);
	let subtitleClasses = classNames('card-subtitle', props.subtitleClasses);

	alt = alt != undefined ? alt : '';
	return (
		<div {...attr}>
			{image != undefined ? (
				<figure className={imgClasses}>
					<Image
						src={image}
						alt={alt}
						className="w-full"
						sizes="100vw"
						loading="lazy"
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
				</figure>
			) : null}
			<div className={bodyClasses}>
				{title != undefined && !isEmpty(title) ? (
					<h3
						className={titleClasses}
						dangerouslySetInnerHTML={{ __html: title }}
					></h3>
				) : null}
				{subtitle != undefined && !isEmpty(subtitle) ? (
					<h4 className={subtitleClasses}>{subtitle}</h4>
				) : null}
				{props.children}
			</div>
		</div>
	);
}
