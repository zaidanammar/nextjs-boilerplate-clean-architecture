type LoginBased = {
	token: string;
	refresh_token: string;
	expired_at: number;
	user_info: {
		user_uuid: string;
		fullname: string;
		email: string;
		phone: string;
	};
};

export type Login = LoginBased;
