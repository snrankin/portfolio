'use client';
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import Heading from './heading';
export default function Section(props: any) {
	let children: React.ReactNode = props.children;

	return (
		<Waypoint>
			<section id={props.id} className="lg:py-32 min-h-screen">
				<div className="container mx-auto">
					{props.showTitle ? <Heading title={props.title} displayTitle={props.displayTitle} flag={props.flag} /> : null}

					{children}
				</div>
			</section>
		</Waypoint>
	);
}
