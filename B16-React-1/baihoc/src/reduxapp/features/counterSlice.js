import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 11,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increCount: (state, action) => {
      state.value += 1;
    },
    increCountWithParams: (state, action) => {
      state.value += action.payload;
      //ex: increCountWithParams(0). 0 = action.payload
    },
  },
});

export const { increCount, increCountWithParams } = counterSlice.actions;

export default counterSlice.reducer;
