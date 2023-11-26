'use client';
import React, {
	createContext,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';

export const ThemeContext = createContext({
	theme: 'light',
	toggleThemeHandler: (str: string) => {},
});

function useWindowDimensions() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useLayoutEffect(() => {
		if (window != undefined) {
			const listener = () => {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
			};

			listener();

			window.addEventListener('resize', listener);

			return () => {
				window.removeEventListener('resize', listener);
			};
		}
	});

	return {
		width,
		height,
	};
}

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	let [theme, setTheme] = useState('light');
	const { width, height } = useWindowDimensions();

	const style = {
		'--vh': `${height * 0.01}px`,
	} as React.CSSProperties;

	function isLocalStorageEmpty(): boolean {
		return !localStorage.getItem('theme');
	}

	function setValueToLocalStorage(str: string): void {
		localStorage.setItem('theme', str);
	}

	const toggleThemeCB = (str: string) => {
		setTheme(str);
		setValueToLocalStorage(str);
	};
	useEffect(() => {
		const toggleTheme = (str: string) => {
			setTheme(str);
			setValueToLocalStorage(str);
		};
		if (isLocalStorageEmpty()) {
			if (
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			) {
				toggleTheme('dark');
			} else {
				toggleTheme('light');
			}
		} else {
			const localTheme = localStorage.getItem('theme');

			setTheme(`${localTheme}`);
		}

		const listener = (e: MediaQueryListEvent) => {
			const newColorScheme = e.matches ? 'dark' : 'light';

			toggleTheme(newColorScheme);
		};

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', listener);

		// if (hljs != undefined) {
		// 	hljs.registerLanguage('javascript', javascript);
		// 	hljs.registerLanguage('bash', bash);
		// 	hljs.registerLanguage('xml', xml);
		// 	hljs.registerLanguage('json', json);
		// 	hljs.highlightAll();
		// }

		return () => {
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', listener);
		};
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{ theme, toggleThemeHandler: toggleThemeCB }}
		>
			<div data-theme={theme} style={style}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
}
