/**
 *
 * Transaction reducer
 *
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TransactionState {
  search: string
  selectedTrxId: string
}

const initialState: TransactionState = {
  search: '',
  selectedTrxId: '',
}

export const TransactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    onChangeSearch: (state, action: PayloadAction<{ search: string }>) => {
      const { search } = action.payload
      //   const regex = new RegExp(search, 'i')
      //   const filteredMenu = menus
      //     .flatMap((el) => el.product)
      //     .filter(({ product_name }) => product_name.match(regex))
      //   state.filteredMenu = filteredMenu
      state.search = search
    },
    onClearSearch: (state) => {
      state.search = ''
    },
    onChangeSelectedTrxId: (state, action: PayloadAction<{ id: string }>) => {
      state.selectedTrxId = action.payload.id
    },
  },
})

// export the action from the slice
export const { onChangeSearch, onClearSearch, onChangeSelectedTrxId } =
  TransactionSlice.actions

export default TransactionSlice.reducer
