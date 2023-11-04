'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import SocialLinks from '@/app/components/social/group';
import dayjs from 'dayjs';
import { Me } from '../../lib/me';
export default function Footer() {
	return (
		<>
			<footer className="print:hidden footer footer-center p-4 bg-base-300 text-base-content print:bg-white">
				<aside>
					<p>
						Copyright © {dayjs().format('YYYY')} - All rights
						reserved by {Me.firstName} {Me.lastName}
					</p>
				</aside>
			</footer>
			<SocialLinks
				className="print:hidden btm-nav bg-primary-500 divide-x lg:w-max lg:divide-x-0 lg:divide-y lg:flex-col lg:left-auto lg:right-0 lg:bottom-16 lg:h-auto lg:rounded-l"
				iconProps={{
					className:
						'tooltip-left block !lg:h-auto p-3 lg:!p-3 lg:text-xl flex items-center justify-center',
					titleDisplay: 'popover',
					iconClasses: 'stroke-2',
				}}
			/>
		</>
	);
}
