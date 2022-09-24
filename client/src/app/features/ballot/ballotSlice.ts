import { createSlice } from '@reduxjs/toolkit'
import { IBallot } from '../../../types'
import {
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
} from '../../api/ballot.api'

interface IBallotState {
  currentBallot: IBallot | null
  ballots: IBallot[]
  loading: boolean
  error: string | string[] | null
}

const initialState: IBallotState = {
  currentBallot: null,
  ballots: [],
  loading: false,
  error: null,
}

const ballotSlice = createSlice({
  name: 'ballot',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeed.fulfilled, (state, action) => {
        state.ballots = action.payload
        state.loading = false
      })

      .addCase(getBallot.fulfilled, (state, action) => {
        state.currentBallot = action.payload
        state.loading = false
      })

      .addCase(createBallot.fulfilled, (state, action) => {
        state.ballots.push(action.payload)
        state.loading = false
      })

      .addCase(updateBallot.fulfilled, (state, action) => {
        state.ballots = state.ballots.map((ballot) => {
          if (ballot._id === action.payload._id) {
            return action.payload
          }
          return ballot
        })
        state.loading = false
      })

      .addCase(deleteBallot.fulfilled, (state, action) => {
        state.ballots = state.ballots.filter((ballot) => ballot._id !== action.payload._id)
        state.loading = false
      })

      .addCase(vote.fulfilled, (state, action) => {
        state.ballots = state.ballots.map((ballot) => {
          if (ballot._id === action.payload._id) {
            return action.payload
          }
          return ballot
        })
        state.loading = false
      })

      .addCase(unvote.fulfilled, (state, action) => {
        state.ballots = state.ballots.map((ballot) => {
          if (ballot._id === action.payload._id) {
            return action.payload
          }
          return ballot
        })
        state.loading = false
      })

      .addCase(comment.fulfilled, (state, action) => {
        state.ballots = state.ballots.map((ballot) => {
          if (ballot._id === action.payload._id) {
            return action.payload
          }
          return ballot
        })
        state.loading = false
      })

      .addCase(uncomment.fulfilled, (state, action) => {
        state.ballots = state.ballots.map((ballot) => {
          if (ballot._id === action.payload._id) {
            return action.payload
          }
          return ballot
        })
        state.loading = false
      })

      .addCase(share.fulfilled, (state, action) => {
        state.ballots = state.ballots.map((ballot) => {
          if (ballot._id === action.payload._id) {
            return action.payload
          }
          return ballot
        })
        state.loading = false
      })
  },
})

export const {} = ballotSlice.actions

export default ballotSlice.reducer
