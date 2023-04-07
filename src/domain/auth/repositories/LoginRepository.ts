import {Login} from '@/domain/auth/model';
import {BaseError} from '@/domain/vo/BaseError';
import {ResultMutation} from '@/domain/vo/BaseResponse';

export type LoginVariables = {
	email: string;
	password: string;
};

type LoginResult = ResultMutation<Login, BaseError>;

export type LoginRepository = {
	login(variables: LoginVariables): void;
} & LoginResult;
