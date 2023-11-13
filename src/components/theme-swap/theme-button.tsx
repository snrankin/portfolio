'use client';
import React, { useContext } from 'react';

import Icon from '../icons/icon-item';

import { ThemeContext } from '@/lib/theme-context';

export default function ThemeButton() {
	const themeCtx: {
		theme: string;
		toggleThemeHandler: (str: string) => void;
	} = useContext(ThemeContext);

	function toggleThemeHandler(str: string): void {
		themeCtx.toggleThemeHandler(str);
	}
	return (
		<div className="form-control">
			<label className="label cursor-pointer grid grid-cols-[1em_max-content_1em] gap-2">
				<Icon icon="sun" className="stroke-2" />
				<input
					type="checkbox"
					className="toggle"
					value={themeCtx.theme}
					onChange={(e) => {
						toggleThemeHandler(e.target.checked ? 'dark' : 'light');
					}}
					checked={themeCtx.theme === 'dark'}
				/>
				<Icon icon="moon" className="stroke-2" />
			</label>
		</div>
	);
}
