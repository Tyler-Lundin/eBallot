import { ILoginForm, IRegisterForm } from '../../types'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '.'

const registerUser = createAsyncThunk('auth/register', async (form: IRegisterForm, thunkAPI) => {
  try {
    const response = await axios.post(auth.register, form)
    console.log('response: ', response)
    console.log('response.data: ', response.data)
    if (response.status > 200 && response.status < 300) {
      return response.data
    }
  } catch (error: any) {
    console.log('error: ', error)
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
})

const loginUser = createAsyncThunk('auth/loginUser', async (form: ILoginForm, thunkAPI) => {
  try {
    const response = await axios.post('/api/auth/login', form)
    console.log('response: ', response)
    console.log('response.data: ', response.data)
    if (response.status > 200 && response.status < 300) {
      return response.data
    }
  } catch (error: any) {
    console.log('error: ', error)
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
})

export { registerUser, loginUser }
