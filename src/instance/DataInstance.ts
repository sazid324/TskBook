// Imports
import axios from "axios";

// Instance
const NoteInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/note",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer your_access_token",
  },
});

// Exports
export { NoteInstance };
