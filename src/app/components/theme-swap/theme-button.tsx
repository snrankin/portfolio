'use client';
import React, { useState, useContext, createContext } from 'react';

import Icon from '../icons/icon-item';

import { ThemeContext } from '@/app/lib/context';

interface ThemeButtonProps {
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export default function ThemeButton({ setTheme }: ThemeButtonProps) {
	const theme = useContext(ThemeContext);

	return (
		<div className="form-control">
			<label className="label cursor-pointer grid grid-cols-[1em_max-content_1em] gap-2">
				<Icon icon="sun" className="stroke-2" />
				<input
					type="checkbox"
					className="toggle"
					value={theme}
					onChange={(e) => {
						setTheme(e.target.checked ? 'dark' : 'light');
					}}
					checked={theme === 'dark'}
				/>
				<Icon icon="moon" className="stroke-2" />
			</label>
		</div>
	);
}
