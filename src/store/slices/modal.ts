import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'

interface ModalProps {
  component: JSX.Element
  data?: any
  onClosed?: () => Promise<void> | any
  confirmBtn?: JSX.Element
  overflow?: boolean
  style?: React.CSSProperties
  className?: string
  showCloseButton?: boolean
  closeOverlay?: boolean
}

interface ModalState {
  isModalOpen: boolean
  component?: JSX.Element | null
  onClosed?: () => Promise<void>
  data?: any
  confirmBtn?: JSX.Element | null
  overflow?: boolean
  style?: React.CSSProperties
  className?: string
  showCloseButton?: boolean
  closeOverlay?: boolean
}

const initialState: ModalState = {
  isModalOpen: false,
  component: null,
  confirmBtn: null,
  overflow: false,
  showCloseButton: false,
  closeOverlay: true,
}

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalProps>) => {
      state.isModalOpen = true
      state.component = action.payload.component
      state.onClosed = action.payload.onClosed
      state.confirmBtn = action.payload.confirmBtn
      state.data = action.payload.data
      state.overflow = action.payload.overflow || false
      state.style = action.payload.style
      state.className = action.payload.className
      state.showCloseButton = action.payload.showCloseButton || false
      state.closeOverlay = action.payload.closeOverlay || true
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.component = null
      state.overflow = false
      state.style = {}
      state.className = ''
      state.onClosed = undefined
      state.data = undefined
      state.confirmBtn = null
      state.showCloseButton = false
      state.closeOverlay = true
    },
  },
})

export default slice.reducer

export const openModal = createAsyncThunk(
  'modal/open',
  async (payload: ModalProps, thunkAPI) => {
    thunkAPI.dispatch(slice.actions.openModal(payload))
    document.body.classList.add('h-screen', 'overflow-hidden')
  },
)

export const closeModal = createAsyncThunk(
  'modal/close',
  async (_: any, thunkAPI) => {
    thunkAPI.dispatch(slice.actions.closeModal())
    document.body.classList.remove('h-screen', 'overflow-hidden')
  },
)
