import { configureStore } from '@reduxjs/toolkit'
import userREducer from './user/userSlice';

export const store = configureStore({
  reducer: { 
    user: userREducer 
  },
})