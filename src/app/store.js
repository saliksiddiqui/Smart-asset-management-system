import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import assetReducer from "../features/assets/assetSlice";
import userReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetReducer,
    users: userReducer,
  },
});

export default store;
