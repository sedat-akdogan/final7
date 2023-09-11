import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '../slices';

export default configureStore({
  reducer: {
    userR: userReducer,
  },
});