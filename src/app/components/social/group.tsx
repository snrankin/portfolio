'use client';
import classNames from 'classnames';
import { merge, omit } from 'lodash';
import React, { HTMLProps } from 'react';
import IconLink, { IconLinkProps } from '@/app/components/icons/link';

import { Me } from '@/app/lib/me';
interface SocialLinkProps extends HTMLProps<HTMLDivElement> {
	iconProps?: IconLinkProps;
}

export default function SocialLinks(props: SocialLinkProps) {
	console.log('🚀 ~ file: group.tsx:14 ~ SocialLinks ~ props:', props);

	let attr: HTMLProps<HTMLDivElement> = omit(props, ['iconProps']);

	return (
		<>
			{Me.profiles != undefined && (
				<div {...attr}>
					{Object.entries(Me.profiles).map(([k, profile]) => {
						merge(profile, props.iconProps);
						return <IconLink {...profile} key={k} />;
					})}
				</div>
			)}
		</>
	);
}
