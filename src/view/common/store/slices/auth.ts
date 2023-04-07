/**
 *
 * Auth reducer
 *
 */
import {Login} from '@/domain/auth/model';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type AuthState = {
	isLoggedIn: boolean;

	authData: Login;
};

const initialState: AuthState = {
	isLoggedIn: false,
	authData: {
		user_info: {
			email: '',
			phone: '',
			fullname: '',
			user_uuid: '',
		},
		token: '',
		refresh_token: '',
		expired_at: 0,
	},
};

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		onLoginSuccess: (state: AuthState, action: PayloadAction<Login>) => {
			state.isLoggedIn = true;
			state.authData = action.payload;
		},
	},
});

export const {onLoginSuccess} = AuthSlice.actions;

export default AuthSlice.reducer;
