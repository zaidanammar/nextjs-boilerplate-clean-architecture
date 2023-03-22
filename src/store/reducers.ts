import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import PersistStorage from 'redux-persist/lib/storage'

import auth from './slices/auth'
import modal from './slices/modal'
import order from './slices/order'
import product from './slices/product'
import transaction from './slices/transaction'

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['auth'],
  storage: PersistStorage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth,
    transaction,
    order,
    modal,
    product,
  }),
)

export default persistedReducer
