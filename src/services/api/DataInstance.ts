// Library imports
import axios from "axios";
import Cookies from "universal-cookie";

// Util imports
import apiUrls from "@/utils/apiUrls";

// Variables
const cookies = new Cookies();

// Instance
const NoteInstance = axios.create({
  baseURL: `${apiUrls.baseUrl}/note`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${cookies.get("usersAccessToken")}`,
  },
});

// Exports
export { NoteInstance };
