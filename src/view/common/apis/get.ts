import axios from '.';

type Get = {
	baseURL?: string;
	endpoint: string;
	params?: Record<string, any>;
	headers?: Record<string, string>;
	isAuth?: boolean;
	data?: any;
};

/**
 * @function Get
 * @example
 * import Get from 'internals/api/get'
 *
 * await Get({
 *  title: 'Example API',
 *  endpoint: '/internal/v1/profile',
 * });
 */
const Get = async ({baseURL, endpoint, data, params, headers = {}}: Get) => {
	const {status, ...response} =
		(await axios().get(endpoint, {
			headers: headers || {},
			params,
			baseURL,
			data,
		})) || {};

	return {
		code: status,
		message: response.data?.message || '',
		...response.data,
	};
};
