'use client';
import React from 'react';
import SocialLinks from '@/components/social/group';
import dayjs from 'dayjs';
import { TypeAuthorFields } from '@/lib/types';
import { COPY } from '@/lib/symbols';
export default function Footer({ author }: { author?: TypeAuthorFields }) {
	return (
		<>
			<footer className="print:hidden footer footer-center pb-envb bg-base-300 dark:bg-slate-900 text-base-content print:bg-white lg:pb-0 ">
				<aside className="p-4">
					<div className="pb-10 lg:pb-0">
						<p>
							Copyright {COPY} {dayjs().format('YYYY')} - All
							rights reserved by {author?.firstName}{' '}
							{author?.lastName}
						</p>
					</div>
				</aside>
			</footer>
			<SocialLinks
				className="print:hidden btm-nav bg-primary-500 divide-x divide-slate-900 lg:w-max lg:divide-x-0 lg:divide-y lg:flex-col lg:left-auto lg:right-0 lg:bottom-16 !h-auto lg:rounded-l z-40"
				author={author}
				iconProps={{
					className:
						'tooltip-top lg:tooltip-left block !lg:h-auto p-3 !p-3 lg:text-xl flex items-center justify-center',
					titleDisplay: 'popover',
					iconClasses: 'stroke-2 text-slate-900',
				}}
			/>
		</>
	);
}
