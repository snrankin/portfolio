'use client';
import { merge, omit } from 'lodash';
import React, { HTMLProps } from 'react';
import IconLink, { IconLinkProps } from '@/components/icons/link';
import { lowerCase, paramCase } from 'change-case-all';
import { TypeAuthorFields, TypeSocialLinks } from '@/lib/types';
interface SocialLinkProps extends HTMLProps<HTMLDivElement> {
	iconProps?: IconLinkProps;
	author?: TypeAuthorFields;
}

export function getSocialLinks(author?: TypeAuthorFields): TypeSocialLinks[] {
	const links: TypeSocialLinks[] = [];

	if (!!author) {
		const profiles = !!author?.socialCollection?.items
			? author?.socialCollection?.items
			: [];
		profiles.forEach((profile) => {
			links.push({
				title: `View ${author?.name}'s ${profile.title} profile`,
				icon: paramCase(lowerCase(`${profile.title}`)),
				href: `${profile.url}`,
			});
		});
		if (author.phone) {
			links.push({
				title: `Call ${author?.name} at ${author?.phone}`,
				icon: 'phone',
				href: `tel:${author?.phone}`,
			});
		}
		if (author.email) {
			links.push({
				title: `Email ${author?.name} at ${author?.email}`,
				icon: 'mail',
				href: `mailto:${author?.email}`,
			});
		}
	}

	return links;
}

export default function SocialLinks(props: SocialLinkProps) {
	let attr: HTMLProps<HTMLDivElement> = omit(props, ['iconProps']);
	const links = getSocialLinks(props.author);
	return (
		<>
			{!!links && (
				<div {...attr}>
					{links.map((profile, k) => {
						merge(profile, props.iconProps);
						return <IconLink {...profile} key={k} />;
					})}
				</div>
			)}
		</>
	);
}
