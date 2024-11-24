import * as storage from 'actions/storage';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({
	theme: 'system',
	setTheme: () => null
});

export const ThemeProvider = ({
	children,
	storageKey = '@theme',
	defaultTheme = 'system',
	...props
}: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(
		() => storage.get<Theme>(storageKey) || defaultTheme
	);

	useEffect(() => {
		const root = document.documentElement;
		const systemTheme = matchMedia('(prefers-color-scheme: dark)');

		const updateTheme = () => {
			root.classList.remove('light', 'dark');

			if (theme === 'system') {
				root.classList.add(systemTheme.matches ? 'dark' : 'light');
				return;
			}

			root.classList.add(theme);
		};

		updateTheme();
		systemTheme.addEventListener('change', updateTheme);

		return () => {
			systemTheme.removeEventListener('change', updateTheme);
		};
	}, [theme]);

	const value = {
		theme,
		setTheme: (newTheme: Theme) => {
			storage.set(storageKey, newTheme);
			setTheme(newTheme);
		}
	};

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === null) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
