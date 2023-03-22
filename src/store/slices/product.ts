import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
  selectedProductId: string
}

const initialState: ProductState = {
  selectedProductId: '',
}

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    onChangeProductId: (state, action: PayloadAction<string>) => {
      state.selectedProductId = action.payload
    },
  },
})

// export the action from the slice
export const { onChangeProductId } = ProductSlice.actions

export default ProductSlice.reducer
