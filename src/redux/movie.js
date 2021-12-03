import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    value: [],
  },
  reducers: {
    movie: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { movie } = movieSlice.actions;
