import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userdata",
  initialState: {
    name: "Tung",
    id: 12313,
    token:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores amet modi quam sapiente officiis qui quasi molestias quia at",
  },
  // list action trong reducers
  reducer: {},
});

export default userSlice.reducer;
