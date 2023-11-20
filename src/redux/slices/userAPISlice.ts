// Library imports
import { createSlice } from "@reduxjs/toolkit";

interface StateInterface {
  message: any;
}

// Redux slice
const userAPISlice: any = createSlice({
  name: "UserAPISlice",
  initialState: {
    message: null,
  } as StateInterface,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

// Exports
export default userAPISlice.reducer;
export const { setMessage } = userAPISlice.actions;
