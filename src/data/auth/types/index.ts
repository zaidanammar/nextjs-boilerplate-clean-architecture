export type LoginDataResponse = {
	user_info: {
		user_uuid: string;
		fullname: string;
		email: string;
		phone: string;
	};
	token: string;
	refresh_token: string;
	expired_at: {
		seconds: number;
		nanos: number;
	};
};
