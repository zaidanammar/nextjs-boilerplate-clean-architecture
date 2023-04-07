import axios from '.';

type Put = {
	title?: string;
	baseURL?: string;
	endpoint: string;
	data: Record<string, any>;
	headers?: Record<string, string>;
	isAuth?: boolean;
};

/**
 * @function Put
 * @example
 * import Put from 'internals/api/put'
 *
 * await Put({
 *  title: 'Example API',
 *  endpoint: '/internal/v1/forgot-password',
 *  payload: {
 *    email: 'johndoe@mail.com',
 *  },
 * });
 */
const Put = async ({baseURL, endpoint, data, headers = {}}: Put) => {
	const {status, ...response} =
		(await axios().put(endpoint, data, {
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
