// Library imports
import { configureStore } from "@reduxjs/toolkit";

// Redux Imports
import cardSliceReducer from "./slices/cardSlice";
import searchSliceReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    CardSlice: cardSliceReducer,
    SearchSlice: searchSliceReducer,
  },
});

// Exports
export default store;
