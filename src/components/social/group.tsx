'use client';
import { lowerCase, paramCase } from 'change-case-all';
import { find, isEmpty, merge, omit } from 'lodash';
import Script from 'next/script';
import React, {
	HTMLProps,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';

import IconButton from '@/components/icons/button';
import IconLink, { IconLinkProps } from '@/components/icons/link';
import { ThemeContext } from '@/lib/context/theme';
import { TypeAuthorFields, TypeSocialLinks } from '@/lib/types';

import { DARK_THEME, LIGHT_THEME } from '../../../tailwind.config';

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
			if (profile.url.includes('calendly')) {
				links.push({
					title: `Schedule an appointment with me via Calendly`,
					icon: 'calendar',
					href: `${profile.url}`,
				});
			} else {
				links.push({
					title: `View my ${profile.title} profile`,
					icon: paramCase(lowerCase(`${profile.title}`)),
					href: `${profile.url}`,
				});
			}
		});
		if (author.phone) {
			links.push({
				title: `Call me at ${author?.phone}`,
				icon: 'phone',
				href: `tel:${author?.phone}`,
			});
		}
		if (author.email) {
			links.push({
				title: `Email me at ${author?.email}`,
				icon: 'mail',
				href: `mailto:${author?.email}`,
			});
		}
	}

	return links;
}

export default function SocialLinks(props: SocialLinkProps) {
	let attr: HTMLProps<HTMLDivElement> = omit(props, ['iconProps']);
	const [booking, setBooking] = useState('');
	const links = getSocialLinks(props.author);

	const modal = useRef(null);
	const modalContent = useRef(null);

	const themeCtx: {
		theme: string;
	} = useContext(ThemeContext);
	useEffect(() => {
		const calendlyLink = find(links, (l) => l.href.includes('calendly'));

		let bgColor =
			themeCtx.theme == 'dark'
				? DARK_THEME['base-100']
				: LIGHT_THEME['base-100'];

		let textColor =
			themeCtx.theme == 'dark'
				? DARK_THEME['base-content']
				: LIGHT_THEME['base-content'];

		let primaryColor =
			themeCtx.theme == 'dark'
				? DARK_THEME['primary']
				: LIGHT_THEME['primary'];

		if (!!calendlyLink) {
			let bookingUrl = new URL(calendlyLink.href);

			bookingUrl.searchParams.append('xhide_event_type_details', '1');
			bookingUrl.searchParams.append('hide_gdpr_banner', '1');
			bookingUrl.searchParams.append(
				'background_color',
				bgColor.replace('#', '')
			);
			bookingUrl.searchParams.append(
				'text_color',
				textColor.replace('#', '')
			);
			bookingUrl.searchParams.append(
				'primary_color',
				primaryColor.replace('#', '')
			);

			setBooking(bookingUrl.toString());
		}
	}, [links, booking, themeCtx]);

	const showModalHandler = () => {
		if (!isEmpty(booking) && !!modal.current) {
			// @ts-ignore
			modal.current.showModal();
		}
	};

	return (
		<>
			{!!links && (
				<div {...attr}>
					{links.map((profile, k) => {
						merge(profile, props.iconProps);
						if (profile.href.includes('calendly')) {
							return (
								<IconButton
									onClick={showModalHandler}
									{...profile}
									key={k}
								/>
							);
						}
						return <IconLink {...profile} key={k} />;
					})}
				</div>
			)}
			{!isEmpty(booking) && (
				<>
					{' '}
					<dialog id="book-event" className="modal" ref={modal}>
						<div className="modal-box min-h-full md:min-h-[90%] w-full rounded-none md:rounded-box  flex flex-col">
							<form method="dialog">
								{/* if there is a button in form, it will close the modal */}
								<IconButton
									icon="x"
									className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50"
								/>
							</form>
							<div
								className="calendly grow min-h-full w-full"
								ref={modalContent}
							></div>
						</div>
					</dialog>
					<Script
						src="https://assets.calendly.com/assets/external/widget.js"
						strategy="lazyOnload"
						onLoad={() => {
							// @ts-ignore
							Calendly.initInlineWidget({
								url: `${booking}`,
								parentElement: modalContent.current,
								prefill: {},
								utm: {},
							});
						}}
					></Script>
					<Script></Script>
				</>
			)}
		</>
	);
}
