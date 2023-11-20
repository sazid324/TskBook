// Library imports
import { configureStore } from "@reduxjs/toolkit";

// Redux Imports
import cardSliceReducer from "./slices/cardSlice";
import searchSliceReducer from "./slices/searchSlice";
import userAPISliceReducer from "./slices/userAPISlice";

const store = configureStore({
  reducer: {
    CardSlice: cardSliceReducer,
    SearchSlice: searchSliceReducer,
    UserAPISlice: userAPISliceReducer,
  },
});

// Exports
export default store;
