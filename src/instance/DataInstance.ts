// Imports
import axios from "axios";
import Cookies from "universal-cookie";

// Variables
const cookies = new Cookies();

// Instance
const NoteInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/note",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${cookies.get("usersAccessToken")}`,
  },
});

// Exports
export { NoteInstance };
