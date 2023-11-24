// Library imports
import axios from "axios";

// Instance
const UserInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/auth/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Exports
export { UserInstance };
