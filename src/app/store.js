import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../feature/user/userSlice';


export default configureStore({
  reducer: {
    user: userSlice
  }
})