// Library imports
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

// Variables
const cookies = new Cookies();

// Interfaces
interface TokenStateInterface {
  refresh: string;
  access: string;
}

interface StateInterface {
  message: any;
  token: TokenStateInterface;
}

// Initial State
const InitialState = {
  token: {
    refresh: `${
      cookies.get("usersRefreshToken") !== undefined
        ? cookies.get("usersRefreshToken")
        : `${
            sessionStorage.getItem("usersJWTToken") !== null
              ? JSON.parse(sessionStorage.getItem("usersJWTToken") || "")
                  .refresh
              : ""
          }`
    }`,
    access: `${
      cookies.get("usersAccessToken") !== undefined
        ? cookies.get("usersAccessToken")
        : `${
            sessionStorage.getItem("usersJWTToken") !== null
              ? JSON.parse(sessionStorage.getItem("usersJWTToken") || "").access
              : ""
          }`
    }`,
  },
  message: null,
} as StateInterface;

// Redux slice
const userAPISlice: any = createSlice({
  name: "UserAPISlice",
  initialState: InitialState,
  reducers: {
    setJWTToken: (state, action) => {
      state.token.refresh = action.payload.token.refresh;
      state.token.access = action.payload.token.access;

      // Saving data to session storage.
      sessionStorage.setItem(
        "usersJWTToken",
        JSON.stringify({
          refresh: state.token.refresh,
          access: state.token.access,
        })
      );

      // Saving data to cookies.
      cookies.set("usersRefreshToken", state.token.refresh, {
        expires: new Date(Date.now() + 25892000000),
      });
      cookies.set("usersAccessToken", state.token.access, {
        expires: new Date(Date.now() + 25892000000),
      });
    },

    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

// Exports
export default userAPISlice.reducer;
export const { setJWTToken, setMessage } = userAPISlice.actions;
