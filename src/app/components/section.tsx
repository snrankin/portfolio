'use client';
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import Heading from './heading';
export default function Section(props: any) {
	const handleEnter = (e: any) => {
		console.log('🚀 ~ file: section.tsx:10 ~ handleEnter ~ e:', e);
	};

	let children: React.ReactNode = props.children;

	return (
		<Waypoint onEnter={handleEnter}>
			<section id={props.id} className="lg:py-32 min-h-screen">
				<div className="container mx-auto">
					<Heading title={props.title} displayTitle={props.displayTitle} flag={props.flag} />
					{children}
				</div>
			</section>
		</Waypoint>
	);
}
