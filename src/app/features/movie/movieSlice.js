/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  recommended: null,
  newDisney: null,
  trending: null,
  original: null,
  all: null,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.all = action.payload.all
      state.recommended = action.payload.recommended
      state.newDisney = action.payload.newDisney
      state.trending = action.payload.trending
      state.original = action.payload.original
    },
  },
})

export const {setMovies} = movieSlice.actions

export const selectRecommend = state => state.movie.recommended
export const selectNewDisney = state => state.movie.newDisney
export const selectTrending = state => state.movie.trending
export const selectOriginals = state => state.movie.original
export const selectAll = state => state.movie.all

export default movieSlice.reducer
