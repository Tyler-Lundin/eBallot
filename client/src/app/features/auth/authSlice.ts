import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../../types'
import { loginUser, registerUser } from '../../api/auth.api'

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
    clearLoginError(state) {
      state.login.error = null
    },
    clearRegisterError(state) {
      state.register.error = null
    },
    setRegisterError(state, action) {
      state.register.error = action.payload
    },
    setLoginError(state, action) {
      state.login.error = action.payload
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

      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.loading = false
        state.login.error = null
        state.authenticated = true
      })

      .addCase(loginUser.pending, (state) => {
        state.login.loading = true
        state.login.error = null
      })

      .addCase(loginUser.rejected, (state, action) => {
        console.log('reject error: ', action.payload)
        state.login.loading = false
        state.login.error = action.payload as string
      })
  },
})

export const {
  setRegisterForm,
  setLoginForm,
  clearLoginError,
  clearRegisterError,
  setLoginError,
  setRegisterError,
} = authSlice.actions
export default authSlice.reducer
