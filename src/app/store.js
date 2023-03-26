/* eslint-disable prettier/prettier */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
import {getDefaultMiddleware, configureStore} from '@reduxjs/toolkit'

import useReducer from '../app/features/user/userSlice'
import movieReducer from '../app/features/movie/movieSlice'

export default configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})
