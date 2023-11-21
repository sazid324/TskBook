"use client";

// Library imports
import Link from "next/link";
import { useDispatch } from "react-redux";

// Instance imports
import { UserInstance } from "@/instance/UserInstance";

// CSS imports
import style from "@/app/signin/signin.module.scss";

// Redux imports
import { setMessage } from "@/redux/slices/userAPISlice";

export default function Signin() {
  // Hooks
  const cardDispatch = useDispatch();

  // Functions
  const signInUser = async (event: any) => {
    event.preventDefault();

    // References
    const email: any = document.getElementById("signInEmail");
    const password: any = document.getElementById("signInPassword");

    try {
      const userSingInData = await UserInstance.post("/signin/", {
        email: email.value.trim(),
        password: password.value.trim(),
      });

      if (userSingInData.data.hasOwnProperty("Token") === true) {
        // Saving data to session storage.
        sessionStorage.setItem(
          "usersJWTToken",
          JSON.stringify(userSingInData.data.Token)
        );

        // Saving data to cookies.
        document.cookie = `usersRefreshToken=${userSingInData.data.Token.refresh}`;
        document.cookie = `usersAccessToken=${userSingInData.data.Token.access}`;
      } else {
        cardDispatch(setMessage({ message: userSingInData.data.message }));
      }

      return userSingInData;
    } catch (error: any) {
      cardDispatch(setMessage({ message: error.message }));
    }
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.signInPageContainer} signInPageContainer`}>
        <div className={`${style.signInFormContainer} signInFormContainer`}>
          <h1 className={`${style.headingOfSignInForm} headingOfSignInForm`}>
            Sign In
          </h1>
          <p
            className={`${style.subHeadingOfSignInForm} subHeadingOfSignInForm`}
          >
            Sign In to continue.
          </p>
          <form className={`${style.SignInForm} SignInForm`} method="post">
            <input
              className={`${style.signInFormInputField} signInFormInputField`}
              id="signInEmail"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <input
              className={`${style.signInFormInputField} signInFormInputField`}
              id="signInPassword"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button
              className={`${style.signInFormSubmitButton} signInFormSubmitButton`}
              type="submit"
              onClick={(event: any) => {
                signInUser(event);
              }}
            >
              Sign In
            </button>
          </form>
          <Link
            className={`${style.forgotPassLinkInSignInForm} forgotPassLinkInSignInForm`}
            href="#"
          >
            Forgot Password?
          </Link>
          <Link
            className={`${style.signUpLinkInSignInForm} signUpLinkInSignInForm`}
            href="/signup"
          >
            Sign Up!
          </Link>
        </div>
      </div>
    </>
  );
}
