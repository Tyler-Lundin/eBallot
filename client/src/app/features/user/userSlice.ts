import { createSlice } from '@reduxjs/toolkit'
import { error, IUser } from '../../../types'
import { getUser } from '../../api/user.api'

export interface IUserState {
  user: IUser | null
  loading: boolean
  error: error
}

const initialState = {
  user: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log('getUser.fulfilled', action.payload)
      state.user = action.payload.user
      state.loading = false
      state.error = null
    })
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
