'use client';
import React, { useState } from 'react';
import Light from '@/img/light.svg';
import Dark from '@/img/dark.svg';
export default function ThemeButton() {
	let [theme, setTheme] = useState('light');

	const toggleTheme = (e) => {
		let currentTheme = e.target.value;

		console.log('🚀 ~ file: themeButton.jsx:11 ~ toggleTheme ~ currentTheme:', currentTheme);

		let newTheme;
		if (currentTheme === 'dark') {
			newTheme = 'light';
		} else {
			newTheme = 'dark';
		}
		console.log('🚀 ~ file: themeButton.jsx:19 ~ toggleTheme ~ newTheme:', newTheme);

		document.documentElement.setAttribute('data-theme', newTheme);
		e.target.value = newTheme;

		setTheme(newTheme);

		return newTheme;
	};
	return (
		<div className="form-control">
			<label className="label cursor-pointer">
				<span className="label-text">
					<span className="icon">
						<Light className="block stroke-2" />
					</span>
				</span>
				<input type="checkbox" className="toggle" value={theme} onChange={toggleTheme} />
				<span className="icon">
					<Dark className="block stroke-2" />
				</span>
			</label>
		</div>
	);
}
