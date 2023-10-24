'use client';
import React, { useState } from 'react';
import Light from '@/icons/light.svg';
import Dark from '@/icons/dark.svg';
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
		<label className="swap swap-rotate btn">
			{/* this hidden checkbox controls the state */}
			<input type="checkbox" value={theme} onChange={toggleTheme} />

			{/* sun icon */}
			<span className="icon swap-on">
				<Light className="block stroke-2" />
			</span>

			{/* moon icon */}
			<span className="icon swap-off">
				<Dark className="block stroke-2" />
			</span>
		</label>
	);
}
