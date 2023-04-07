import axios from '.';

type Patch = {
	title?: string;
	baseURL?: string;
	endpoint: string;
	data: Record<string, any>;
	headers?: Record<string, string>;
	isAuth?: boolean;
};

/**
 * @function Patch
 * @example
 * import Patch from 'internals/api/patch'
 *
 * await Patch({
 *  title: 'Example API',
 *  endpoint: '/internal/v1/forgot-password',
 *  payload: {
 *    email: 'johndoe@mail.com',
 *  },
 * });
 */
const Patch = async ({baseURL, endpoint, data, headers = {}}: Patch) => {
	const {status, ...response} =
		(await axios().patch(endpoint, data, {
			headers: headers || {},
			baseURL,
		})) || {};
	const isSuccess = status === 200 && response.data === 2200;

	if (isSuccess) {
		return response.data;
	}

	return {
		code: 2200,
		message: response.data?.message || '',
		...response.data,
	};
};
