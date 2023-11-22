// Library imports
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Cookies from "universal-cookie";

// Variables
const cookies = new Cookies();

// Custom Hook
export default function useJWTRecover() {
  // Sessions
  const usersJWTToken = JSON.parse(sessionStorage.getItem("usersJWTToken"));

  // Cookies
  const usersRefreshToken = cookies.get("usersRefreshToken");
  const usersAccessToken = cookies.get("usersAccessToken");

  // Hooks
  useEffect(() => {
    if (usersRefreshToken === undefined || usersAccessToken === undefined) {
      // Saving data to cookies.
      cookies.set("usersRefreshToken", usersJWTToken.refresh, {
        expires: new Date(Date.now() + 25892000000),
      });
      cookies.set("usersAccessToken", usersJWTToken.access, {
        expires: new Date(Date.now() + 25892000000),
      });
    } else if (usersJWTToken === null) {
      // Saving data to session storage.
      sessionStorage.setItem(
        "usersJWTToken",
        JSON.stringify({
          refresh: usersRefreshToken,
          access: usersAccessToken,
        })
      );
    } else if (usersJWTToken && usersRefreshToken) {
      return;
    } else {
      redirect("/signin");
    }
  }, []);
}
