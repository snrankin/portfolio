'use client';
import React, { useState, useRef, useEffect, createContext } from 'react';
import { Waypoint } from 'react-waypoint';
export const SectionContext = createContext({
	section: '',
	updateSectionHandler: (str: string): void => {},
});

export default function SectionProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	let [section, setSection] = useState('');

	useEffect(() => initialSectionHandler());

	function initialSectionHandler(): void {}

	const updateSection = (str: string) => {
		setSection(str);
	};

	return (
		<SectionContext.Provider
			value={{ section, updateSectionHandler: updateSection }}
		>
			{children}
		</SectionContext.Provider>
	);
}
