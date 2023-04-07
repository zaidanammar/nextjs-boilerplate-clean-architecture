import axios from '.';

type Delete = {
	title?: string;
	baseURL?: string;
	endpoint: string;
	params?: Record<string, any>;
	headers?: Record<string, string>;
	isAuth?: boolean;
};

/**
 * @function Delete
 * @example
 * import Delete from 'internals/api/delete'
 *
 * await Delete({
 *  title: 'Example API',
 *  endpoint: '/internal/v1/watchlist/:id/delete',
 * });
 */
const Delete = async ({baseURL, endpoint, params, headers = {}}: Delete) => {
	const {status, ...response} =
		(await axios().delete(endpoint, {
			headers: headers || {},
			params,
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
