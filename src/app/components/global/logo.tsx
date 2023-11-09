'use client';
import React from 'react';
import ThemeSwap from '@/app/components/theme-swap/theme-swap';
import LogoDark from '@/img/logos/dark.svg';
import LogoLight from '@/img/logos/light.svg';
import classNames from 'classnames';
export default function Logo({ className }: { className?: string }) {
	let classes = classNames('logo', className);

	return (
		<ThemeSwap
			light={<LogoDark className={classes} />}
			dark={<LogoLight className={classes} />}
		/>
	);
}
