import { createSlice } from '@reduxjs/toolkit'

export interface INavState {
  isOpen: boolean
}

const initialState: INavState = {
  isOpen: false,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleNav: (state, action) => {
      if (action.payload !== undefined) state.isOpen = action.payload
      else state.isOpen = !state.isOpen
    },
  },
})

export const { toggleNav } = navSlice.actions

export default navSlice.reducer
