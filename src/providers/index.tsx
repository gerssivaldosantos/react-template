import { Toaster } from 'components/ui/toaster';
import env from 'config/env';
import { ThemeProvider } from 'hooks/use-theme';
import type { ReactNode } from 'react';
import QueryProvider from './react-query';

type ProvidersProps = {
	children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
	return (
		<ThemeProvider defaultTheme="system" storageKey={env.storage.theme}>
			<Toaster />
			<QueryProvider>{children}</QueryProvider>
		</ThemeProvider>
	);
}
