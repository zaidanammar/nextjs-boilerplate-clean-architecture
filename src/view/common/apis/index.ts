import axios, {AxiosError, AxiosResponse} from 'axios';

import {store} from '../store';

const instance = () => {
	const {token} = store.getState().auth.authData;
	return axios.create({
		headers: {
			token,
		},
	});
};

instance().interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => error.response,
);

export default instance;
