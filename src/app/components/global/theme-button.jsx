'use client';
import React, { useState } from 'react';

import Icon from '../icons/icon-item';
export default function ThemeButton() {
	let [theme, setTheme] = useState('light');

	const toggleTheme = (e) => {
		let currentTheme = e.target.value;

		let newTheme;
		if (currentTheme === 'dark') {
			newTheme = 'light';
		} else {
			newTheme = 'dark';
		}

		document.documentElement.setAttribute('data-theme', newTheme);
		e.target.value = newTheme;

		setTheme(newTheme);

		return newTheme;
	};
	return (
		<div className="form-control">
			<label className="label cursor-pointer grid grid-cols-[1em_max-content_1em] gap-2">
				<Icon icon="sun" className="stroke-2" />
				<input
					type="checkbox"
					className="toggle"
					value={theme}
					onChange={toggleTheme}
				/>
				<Icon icon="moon" className="stroke-2" />
			</label>
		</div>
	);
}
