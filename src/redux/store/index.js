import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '../slices';

export default store = configureStore({
  reducer: {
    userR: userReducer,
  },
});