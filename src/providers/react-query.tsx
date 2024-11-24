import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type QueryProviderProps = {
	children: React.ReactNode;
};

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			notifyOnChangeProps: ['data', 'error']
		}
	}
});

export default function QueryProvider({ children }: QueryProviderProps) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
