'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import SocialLinks from '@/components/social/group';
import dayjs from 'dayjs';
import { Me } from '../../lib/me';
export default function Footer() {
	return (
		<>
			<footer className="print:hidden footer footer-center bg-base-300 text-base-content print:bg-white pb-[40px] lg:pb-0">
				<aside className="p-4">
					<p>
						Copyright © {dayjs().format('YYYY')} - All rights
						reserved by {Me.firstName} {Me.lastName}
					</p>
				</aside>
			</footer>
			<SocialLinks
				className="print:hidden btm-nav bg-primary-500 divide-x dark:divide-neutral-900 lg:w-max lg:divide-x-0 lg:divide-y lg:flex-col lg:left-auto lg:right-0 lg:bottom-16 !h-auto lg:rounded-l z-40"
				iconProps={{
					className:
						'tooltip-top lg:tooltip-left block !lg:h-auto p-3 !p-3 lg:text-xl flex items-center justify-center',
					titleDisplay: 'popover',
					iconClasses: 'stroke-2 dark:text-neutral-900',
				}}
			/>
		</>
	);
}
