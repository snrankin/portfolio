'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import SocialProfiles from './social';
export default function Footer() {
	return (
		<>
			<footer className="footer footer-center p-4 bg-base-300 text-base-content">
				<aside>
					<p>
						Copyright © 2023 - All right reserved by ACME Industries
						Ltd
					</p>
				</aside>
			</footer>
			<div className="btm-nav md:hidden divide-x drop-shadow-[0_-1px_-1px_rgba(0,0,0,0.25)]">
				<SocialProfiles />
			</div>
		</>
	);
}
