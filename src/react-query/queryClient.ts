import { QueryClient } from '@tanstack/react-query';
import { fireToast } from '../Components/App/hooks/useToast';

function queryErrorHandler(error: unknown): void {
	const title = error instanceof Error ? `Something went wrong: ${error.message}` : 'error connecting to server';

	fireToast({ title, status: 'error' });
}

export function generateQueryClient(): QueryClient {
	return new QueryClient({
		defaultOptions: {
			queries: {
				onError: queryErrorHandler,
				staleTime: 600000, // 10 minutes
				cacheTime: 900000, // 15 minutes;
				refetchOnMount: false,
				refetchOnWindowFocus: false,
				refetchOnReconnect: false,
			},
			mutations: {
				onError: queryErrorHandler,
			},
		},
	});
}

export const queryClient = generateQueryClient();
