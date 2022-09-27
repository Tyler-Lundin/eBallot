import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../../types'
import { registerUser } from '../../api/auth.api'

const initialState: IAuthState = {
  user: null,
  authenticated: false, // TODO: change to false when auth is implemented
  loading: false,
  error: null,
  register: {
    form: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    loading: false,
    error: null,
  },
  login: {
    form: {
      username: '',
      password: '',
    },
    loading: false,
    error: null,
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegisterForm(state, action) {
      state.register.form = action.payload
    },
    setLoginForm(state, action) {
      state.login.form = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.register.loading = false
        state.register.error = null
        state.authenticated = true
      })
      .addCase(registerUser.pending, (state) => {
        state.register.loading = true
        state.register.error = null
      })

      .addCase(registerUser.rejected, (state, action) => {
        console.log('reject error: ', action.payload)
        state.register.loading = false
        state.register.error = action.payload as string
      })
  },
})

export const { setRegisterForm, setLoginForm } = authSlice.actions
export default authSlice.reducer
