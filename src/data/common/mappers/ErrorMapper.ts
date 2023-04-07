import {BaseError, BaseErrorType} from '@/domain/vo/BaseError';
import {Response} from '@/domain/vo/BaseResponse';
import {AxiosError} from 'axios';

const mapToBaseErrorType = (error: AxiosError<Response>): BaseErrorType => {
	let errorType: BaseErrorType;

	switch (error.response?.data.code) {
		case 400:
			errorType = 'BAD_REQUEST';
			break;
		case 401:
			errorType = 'UNAUTHORIZED';
			break;
		case 403:
			errorType = 'FORBIDDEN';
			break;
		case 404:
			errorType = 'NOT_FOUND';
			break;
		case 409:
			errorType = 'CONFLICT';
			break;
		case 412:
			errorType = 'PRECONDITION_FAILED';
			break;
		case 500:
			errorType = 'INTERNAL_SERVER_ERROR';
			break;
		default:
			errorType = 'UNKNOWN';
			break;
	}

	return errorType;
};

export const mapToBaseError = (error: AxiosError<Response>): BaseError => {
	const errorType = mapToBaseErrorType(error);

	return new BaseError({
		type: errorType,
		title: error.response?.data?.message || 'Error',
		message: error.response?.data?.more_info || 'Internal Server Error',
	});
};
