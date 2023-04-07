import {useLoginUsecase} from '@/data/auth/usecases/LoginUsecase';
import {MutationOptions} from '@/data/common/types';
import {LoginRepository} from '@/domain/auth/repositories/LoginRepository';

export const useLoginViewModel = (
	options: MutationOptions,
): LoginRepository => {
	const result = useLoginUsecase(options);

	return result;
};
