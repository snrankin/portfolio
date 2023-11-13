'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '@/lib/theme-context';

function ThemeSwap({
	light,
	dark,
}: {
	light?: React.ReactNode;
	dark?: React.ReactNode;
}) {
	const themeCtx: {
		theme: string;
		toggleThemeHandler: (str: string) => void;
	} = useContext(ThemeContext);

	let content;

	if (themeCtx.theme === 'dark' && !!dark && React.isValidElement(dark)) {
		content = dark;
	}

	if (themeCtx.theme === 'light' && !!light && React.isValidElement(light)) {
		content = light;
	}

	return <>{content}</>;
}

export default ThemeSwap;
