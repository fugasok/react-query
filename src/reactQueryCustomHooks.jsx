import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';

export const useFetchTasks = () => {
	const { isLoading, data, error, isError } = useQuery({
		queryKey: ['tasks'],
		queryFn: async () => {
			const { data } = await customFetch.get('/');
			return data;
		},
	});
	return { isLoading, isError, data };
};
