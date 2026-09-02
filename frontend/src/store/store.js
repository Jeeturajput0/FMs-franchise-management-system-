import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slice/courseSlice';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

export default store;
