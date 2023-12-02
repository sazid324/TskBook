// Library imports
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import secureLocalStorage from "react-secure-storage";

// Variables
const cookies = new Cookies();

// Interfaces
interface TokenStateInterface {
  refresh: string;
  access: string;
}

interface StateInterface {
  message: any;
  userData: {
    user_id: any;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    is_user: boolean;
    is_superuser: boolean;
  };
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
  userData: {
    user_id: "",
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    is_user: false,
    is_superuser: false,
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
      if (window.location.pathname !== "/signup") {
        cookies.set("usersRefreshToken", state.token.refresh, {
          expires: new Date(Date.now() + 25892000000),
        });
        cookies.set("usersAccessToken", state.token.access, {
          expires: new Date(Date.now() + 25892000000),
        });
      }
    },

    setUserData: (state, action) => {
      state.userData.is_user = action.payload.isUser;

      // Creating user data object
      const userDataObject = {
        user_id: action.payload.userID,
        first_name: action.payload.firstName,
        last_name: action.payload.lastName,
        username: action.payload.username,
        email: action.payload.email,
        is_user: action.payload.isUser,
        is_superuser: action.payload.isSuperuser,
      };

      // Saving encrypted data to local storage
      secureLocalStorage.setItem("UserData", JSON.stringify(userDataObject));
    },

    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

// Exports
export default userAPISlice.reducer;
export const { setJWTToken, setUserData, setMessage } = userAPISlice.actions;
