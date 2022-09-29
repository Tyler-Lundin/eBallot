import { createSlice } from '@reduxjs/toolkit'
import { error, IUser } from '../../../types'
import { getUser } from '../../api/user.api'

export interface IUserState {
  user: IUser
  loading: boolean
  error: error
}

const initialState: IUserState = {
  user: {
    userStats: {
      ballotStats: {
        totalVotes: 0,
        totalComments: 0,
        totalReactions: 0,
      },
      commentStats: {
        totalReplies: 0,
        totalReactions: 0,
      },
      reactionStats: {
        totalReactions: 0,
      },
      friendStats: {
        totalFriends: 0,
        totalMessages: 0,
      },
      viewCount: 0,
    },
    username: '',
    email: '',
    phoneNumber: '',
    profilePhotoURL: '',
    ballots: [],
    chats: [],
    comments: [],
    reactions: [],
    requests: [],

    votes: [],
    createdAt: null,
    updatedAt: null,
  },
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
