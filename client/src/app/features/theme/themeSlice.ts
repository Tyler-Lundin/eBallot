import { createSlice } from '@reduxjs/toolkit'
import { IThemeState } from '../../../types'

const initialState: IThemeState = {
  currentTheme: {
    name: 'default',
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      success: '#28a745',
      info: '#17a2b8',
      warning: '#ffc107',
      danger: '#dc3545',
      light: '#f8f9fa',
      dark: '#343a40',
    },
    fonts: {
      primary: 'Roboto',
      secondary: 'Roboto Mono',
    },
    fontSizes: {
      xs: '10px',
      s: '12px',
      m: '14px',
      l: '16px',
      xl: '18px',
      xxl: '20px',
      xxxl: '24px',
    },
  },
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeName: (state, action) => {
      state.currentTheme.name = action.payload
    },
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload
    },
    setThemeColors: (state, action) => {
      state.currentTheme = action.payload
    },
    setFonts: (state, action) => {
      state.currentTheme.fonts = action.payload
    },
    setFontSizes: (state, action) => {
      state.currentTheme.fontSizes = action.payload
    },
  },
})

export const { setThemeName, setCurrentTheme, setThemeColors, setFonts, setFontSizes } =
  themeSlice.actions

export default themeSlice.reducer
