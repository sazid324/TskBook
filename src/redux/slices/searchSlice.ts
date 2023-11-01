// Library imports
import { createSlice } from "@reduxjs/toolkit";

// Redux slice
const searchSlice = createSlice({
  name: "SearchSlice",
  initialState: "",
  reducers: {
    searchQuery: (_, action) => {
      return action.payload;
    },
  },
});

// Exports
export default searchSlice.reducer;
export const { searchQuery } = searchSlice.actions;
