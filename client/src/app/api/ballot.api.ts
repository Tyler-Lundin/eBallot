import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ballot } from './index'

// feed: '/api/ballot/feed',
// getBallot: '/api/ballot/:id',
// createBallot: '/api/ballot',
// updateBallot: '/api/ballot/:id',
// deleteBallot: '/api/ballot/:id',
// vote: '/api/ballot/:id/vote',
// unvote: '/api/ballot/:id/unvote',
// comment: '/api/ballot/:id/comment',
// uncomment: '/api/ballot/:id/uncomment',
// share: '/api/ballot/:id/share',

const getFeed = createAsyncThunk('ballot/getFeed', async (payload: any, thunkAPI) => {
  const response = await axios.get(ballot.feed)
  return response.data
})

const getBallot = createAsyncThunk('ballot/getBallot', async (payload: any, thunkAPI) => {
  const response = await axios.get(ballot.getBallot)
  return response.data
})

const createBallot = createAsyncThunk('ballot/createBallot', async (payload: any, thunkAPI) => {
  const response = await axios.post(ballot.createBallot, payload)
  return response.data
})

const updateBallot = createAsyncThunk('ballot/updateBallot', async (payload: any, thunkAPI) => {
  const response = await axios.put(ballot.updateBallot, payload)
  return response.data
})

const deleteBallot = createAsyncThunk('ballot/deleteBallot', async (payload: any, thunkAPI) => {
  const response = await axios.delete(ballot.deleteBallot)
  return response.data
})

const vote = createAsyncThunk('ballot/vote', async (payload: any, thunkAPI) => {
  const response = await axios.post(ballot.vote)
  return response.data
})

const unvote = createAsyncThunk('ballot/unvote', async (payload: any, thunkAPI) => {
  const response = await axios.post(ballot.unvote)
  return response.data
})

const comment = createAsyncThunk('ballot/comment', async (payload: any, thunkAPI) => {
  const response = await axios.post(ballot.comment)
  return response.data
})

const uncomment = createAsyncThunk('ballot/uncomment', async (payload: any, thunkAPI) => {
  const response = await axios.post(ballot.uncomment)
  return response.data
})

const share = createAsyncThunk('ballot/share', async (payload: any, thunkAPI) => {
  const response = await axios.post(ballot.share)
  return response.data
})

export {
  getFeed,
  getBallot,
  createBallot,
  updateBallot,
  deleteBallot,
  vote,
  unvote,
  comment,
  uncomment,
  share,
}
