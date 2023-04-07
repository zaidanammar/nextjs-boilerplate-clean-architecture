import axios from '.';

type Post = {
	endpoint: string;
	data: any;
	baseURL?: string;
	headers?: Record<string, string>;
	isAuth?: boolean;
};

/**
 * @function Post
 * @example
 * import Post from 'internals/api/post'
 *
 * await Post({
 *  title: 'Example API',
 *  endpoint: '/internal/v1/forgot-password',
 *  payload: {
 *    email: 'johndoe@mail.com',
 *  },
 * });
 */

const Post = async ({baseURL, endpoint, data, headers = {}}: Post) => {
	const {status, ...response} =
		(await axios().post(endpoint, data, {
			headers: {
				...headers,
			},
			baseURL,
		})) || {};

	const isSuccess = status === 200 && response.data === 2200;

	if (isSuccess) {
		return response.data;
	}

	return {
		code: status || 2200,
		message: response.data?.message || '',
		...response.data,
	};
};

export default Post;
