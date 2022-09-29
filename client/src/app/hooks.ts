import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ITheme, IUser } from '../types'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useNavState = () => useAppSelector((state) => state.nav)
export const useAuthState = () => useAppSelector((state) => state.auth)
export const useThemeState = () => useAppSelector((state) => state.theme)
export const useUserState = () => useAppSelector((state) => state.user)
export const useUser = () => useUserState().user
export const useTheme = () => useThemeState().currentTheme as ITheme
