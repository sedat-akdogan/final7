import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userID: '',
  },

  reducers: {
    setUserID: (state, action) => {
      // console.log('Payload', action.payload);
      state.userID = action.payload;
    },
    resetUserID: state => {
      state.userID = '';
    },
  },
});

export const {setUserID, resetUserID} = userSlice.actions;

export default userSlice.reducer;