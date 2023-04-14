import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import counterSlice from "./features/counterSlice";
import postSlice from "./features/postSlice";
export default configureStore({
  reducer: {
    userReducer: userReducer,
    counterReducer: counterSlice,
    posts: postSlice,
  },
});
