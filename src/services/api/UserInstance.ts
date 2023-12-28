// Library imports
import axios from "axios";

// Util imports
import apiUrls from "@/utils/apiUrls";

// Instance
const UserInstance = axios.create({
  baseURL: `${apiUrls.baseUrl}/auth`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Exports
export { UserInstance };
