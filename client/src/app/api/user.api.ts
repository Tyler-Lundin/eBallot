import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getUser = createAsyncThunk('auth/getUserData', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/user')
    console.log('response: ', response)
    console.log('response.data: ', response.data)
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  } catch (error: any) {
    console.log('error: ', error)
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
})

export { getUser }
