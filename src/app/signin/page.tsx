"use client";

// Library imports
import Link from "next/link";
import { useDispatch } from "react-redux";

// Instance imports
import { UserInstance } from "@/instance/UserInstance";

// CSS imports
import style from "@/app/signin/signin.module.scss";

// Redux imports
import { setJWTToken, setMessage } from "@/redux/slices/userAPISlice";

export default function Signin() {
  // Hooks
  const cardDispatch = useDispatch();
  const userAPIDispatch = useDispatch();

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
        // Dispatching slice
        userAPIDispatch(
          setJWTToken({
            token: {
              refresh: userSingInData.data.Token.refresh,
              access: userSingInData.data.Token.access,
            },
          })
        );

        // Redirecting page
        window.location.href = "/";
      } else {
        cardDispatch(setMessage({ message: userSingInData.data.message }));
      }
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
