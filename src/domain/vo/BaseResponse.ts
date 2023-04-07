import {UseMutationResult, UseQueryResult} from '@tanstack/react-query';

export type Response<TData = unknown> = {
	code: number;
	data: TData;
	message: string;
	more_info: string;
};

type ResultQuery<TData = unknown, TError = unknown> = Omit<
	UseQueryResult<unknown, TError>,
	'data'
> & {
	data: TData;
};

export type ResultMutation<
	TData = unknown,
	TError = unknown,
	TVariables = unknown,
> = Omit<
	UseMutationResult<TData, TError, TVariables, unknown>,
	'data' | 'mutate' | 'mutateAsync' | 'variables' | 'failureReason'
> & {
	data: TData | null | undefined;
};
