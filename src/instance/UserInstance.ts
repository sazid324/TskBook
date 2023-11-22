// Library imports
import axios from "axios";
import Cookies from "universal-cookie";

  // Variables
  const cookies = new Cookies();

// Instance
const UserInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/auth/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("usersAccessToken")}`,
  },
});

// Exports
export { UserInstance };
