/**
 *
 * Auth reducer
 *
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Login } from '@/domain/auth/model'

export interface AuthState {
  isLoggedIn: boolean
  isSubscription: boolean
  authData: Login
  showSidebar: boolean
  outletId: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  authData: {
    uuid: '',
    token: '',
    refresh_token: '',
    expired_at: 0,
  },
  showSidebar: false,
  outletId: '',
  isSubscription: false,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoginSuccess: (state: AuthState, action: PayloadAction<Login>) => {
      state.isLoggedIn = true
      state.authData = action.payload
    },
    onLogout: (state: AuthState) => {
      state.isLoggedIn = false
      state.authData = {
        uuid: '',
        token: '',
        refresh_token: '',
        expired_at: 0,
      }
      state.outletId = ''
      state.isSubscription = false
    },
    setShowSidebar: (state: AuthState, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload
    },
    setRestaurantOutletId: (
      state: AuthState,
      action: PayloadAction<string>,
    ) => {
      state.outletId = action.payload
    },
    setIsSubscription: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isSubscription = action.payload
    },
  },
})

// export the action from the slice
export const {
  onLoginSuccess,
  onLogout,
  setShowSidebar,
  setRestaurantOutletId,
  setIsSubscription,
} = AuthSlice.actions

export default AuthSlice.reducer
