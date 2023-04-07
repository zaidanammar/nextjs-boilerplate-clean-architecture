import {mapToBaseError} from '@/data/common/mappers/ErrorMapper';
import {MutationOptions} from '@/data/common/types';
import {
	LoginVariables,
	LoginRepository,
} from '@/domain/auth/repositories/LoginRepository';
import {BaseError} from '@/domain/vo/BaseError';

import {mapToLoginModel} from '../mappers/AuthMapper';
import {useLoginMutation} from '../sources/LoginMutation';

export const useLoginUsecase = ({
	onError,
	onSuccess,
	...options
}: MutationOptions): LoginRepository => {
	let error: BaseError | null = null;

	const {
		mutate,
		data,
		error: _error,
		...rest
	} = useLoginMutation({
		onSuccess: (dataSuccess, ...args) => {
			if (dataSuccess) {
				onSuccess?.(mapToLoginModel(dataSuccess?.data), ...args);
			}
		},
		onError: (dataError, ...args) => {
			if (dataError) {
				onError?.(mapToBaseError(dataError), ...args);
			}
		},
		...options,
	});

	const login = (input: LoginVariables) => {
		mutate(input);
	};

	if (_error) {
		error = mapToBaseError(_error);
	}

	if (data?.data) {
		return {
			login,
			error,
			data: mapToLoginModel(data?.data),
			...rest,
		};
	}

	return {
		login,
		error,
		data: undefined,
		...rest,
	};
};
