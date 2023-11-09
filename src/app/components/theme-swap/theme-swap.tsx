'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '@/app/lib/context';

function ThemeSwap({
	light,
	dark,
}: {
	light?: React.ReactNode;
	dark?: React.ReactNode;
}) {
	const theme = useContext(ThemeContext);

	let content;

	if (theme === 'dark' && !!dark && React.isValidElement(dark)) {
		content = dark;
	}

	if (theme === 'light' && !!light && React.isValidElement(light)) {
		content = light;
	}

	return <>{content}</>;
}

export default ThemeSwap;
