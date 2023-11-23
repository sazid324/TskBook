// Library imports
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

// Variables
const cookies = new Cookies();

// Custom Hook
export default function useJWTRecover() {
  // Sessions
  let usersJWTToken: any;

  if (typeof sessionStorage !== "undefined") {
    const storedToken = sessionStorage.getItem("usersJWTToken");

    if (storedToken) {
      usersJWTToken = JSON.parse(storedToken);
    } else {
      usersJWTToken = null;
    }
  } else {
    usersJWTToken = null;
  }

  // Cookies
  const usersRefreshToken = cookies.get("usersRefreshToken");
  const usersAccessToken = cookies.get("usersAccessToken");

  // Functions
  const isTokenExpired = (token: any) => {
    if (token !== undefined) {
      const decoded = jwtDecode(token);
      const currentTimestamp = Date.now() / 1000;

      if (decoded.exp !== undefined && decoded.exp >= currentTimestamp) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  // Hooks
  useEffect(() => {
    if (
      (usersRefreshToken === undefined || usersAccessToken === undefined) &&
      usersJWTToken !== null &&
      (isTokenExpired(usersRefreshToken) === false ||
        isTokenExpired(usersJWTToken.refresh) === false)
    ) {
      // Saving data to cookies.
      cookies.set("usersRefreshToken", usersJWTToken.refresh, {
        expires: new Date(Date.now() + 25892000000),
      });
      cookies.set("usersAccessToken", usersJWTToken.access, {
        expires: new Date(Date.now() + 25892000000),
      });
    } else if (
      usersJWTToken === null &&
      usersRefreshToken !== undefined &&
      usersAccessToken !== undefined &&
      (isTokenExpired(usersRefreshToken) === false ||
        isTokenExpired(usersJWTToken.refresh) === false)
    ) {
      // Saving data to session storage.
      sessionStorage.setItem(
        "usersJWTToken",
        JSON.stringify({
          refresh: usersRefreshToken,
          access: usersAccessToken,
        })
      );
    } else if (
      usersJWTToken !== null &&
      usersRefreshToken !== undefined &&
      usersAccessToken !== undefined &&
      (isTokenExpired(usersRefreshToken) === false ||
        isTokenExpired(usersJWTToken.refresh) === false)
    ) {
      return;
    } else {
      redirect("/signin");
    }
  }, []);
}

// isTokenExpired(usersJWTToken.refresh) === false;
// isTokenExpired(usersRefreshToken) === false;
