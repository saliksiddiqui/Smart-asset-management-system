import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    signupUser: (state, action) => {
      state.users.push(action.payload);
      state.currentUser = action.payload; 
    },
    loginUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signupUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
