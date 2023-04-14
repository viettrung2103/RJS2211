import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Post 1", comment: "Comment 1", rating: 5 },
  { id: 2, title: "Post 2", comment: "Comment 2", rating: 10 },
  { id: 3, title: "Post 3", comment: "Comment 3", rating: 8 },
  { id: 4, title: "Post 4", comment: "Comment 4", rating: 9 },
];

const postSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const copyState = JSON.parse(JSON.stringify(state));
      return copyState;
    },
    deletePost: (state, action) => {},
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
