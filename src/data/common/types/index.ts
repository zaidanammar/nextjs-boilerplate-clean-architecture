import {Response} from '@/domain/vo/BaseResponse';
import {
	UseMutationOptions,
	UseQueryOptions,
	MutateOptions as MutationOptionsPrimitive,
} from '@tanstack/react-query';

type CustomMutationOptionsFn<TData, TVariables> = {
	// onMutate?: MutationOptionsPrimitive<
	// 	TData,
	// 	unknown,
	// 	TVariables,
	// 	unknown
	// >['onMutate'];
	onSuccess?: MutationOptionsPrimitive<
		TData,
		unknown,
		TVariables,
		unknown
	>['onSuccess'];
	onError?: MutationOptionsPrimitive<
		TData,
		unknown,
		TVariables,
		unknown
	>['onError'];
	onSettled?: MutationOptionsPrimitive<
		TData,
		unknown,
		TVariables,
		unknown
	>['onSettled'];
};

export type MutationOptions<TData = unknown, TVariables = unknown> = Omit<
	UseMutationOptions<Response<TData>, unknown, TVariables, unknown>,
	'onMutate' | 'onSuccess' | 'onError' | 'onSettled' | 'mutationFn'
> &
	CustomMutationOptionsFn<TData, TVariables>;

type QueryOptions = Omit<
	UseQueryOptions<unknown, unknown, unknown, Array<string>>,
	'queryKey' | 'queryFn' | 'initialData'
> & {
	initialData?: () => undefined;
};
