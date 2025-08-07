import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuth: boolean;
  uid: string;
}

const initialState: UserState = {
  isAuth: false,
  uid: '',
};

export const UserSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserState>) {
      state.isAuth = action.payload.isAuth;
      state.uid = action.payload.uid;
    },
  },
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
