import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../themeSlice/themeslice.js'
export const store = configureStore({
  reducer: {
   theme: themeReducer
  },
})