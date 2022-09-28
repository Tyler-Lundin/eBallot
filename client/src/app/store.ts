import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import navSlice from './features/nav/navSlice'
import themeSlice from './features/theme/themeSlice'
import userSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    nav: navSlice,
    auth: authSlice,
    theme: themeSlice,
    user: userSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
