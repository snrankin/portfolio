'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '@/lib/context/theme';
import Image, { ImageProps } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

function Light({ children }: { children?: React.ReactNode }) {
	const themeCtx: {
		theme: string;
	} = useContext(ThemeContext);
	return <>{themeCtx.theme === 'light' && children}</>;
}
function Dark({ children }: { children?: React.ReactNode }) {
	const themeCtx: {
		theme: string;
	} = useContext(ThemeContext);
	return <>{themeCtx.theme === 'dark' && children}</>;
}

interface ThemeSwapImageProps extends Omit<ImageProps, 'src'> {
	dark?: string | StaticImport;
	light?: string | StaticImport;
}

function Img(props: ThemeSwapImageProps) {
	const themeCtx: {
		theme: string;
	} = useContext(ThemeContext);

	let content;

	if (themeCtx.theme === 'dark' && !!props.dark) {
		// eslint-disable-next-line
		content = <Image src={props.dark} {...props} />;
	}

	if (themeCtx.theme === 'light' && !!props.light) {
		// eslint-disable-next-line
		content = <Image src={props.light} {...props} />;
	}
	return <>{content}</>;
}

function ThemeSwap({ children }: { children?: React.ReactNode }) {
	return <>{children}</>;
}
ThemeSwap.Light = Light;
ThemeSwap.Dark = Dark;
ThemeSwap.Img = Img;
export default ThemeSwap;
