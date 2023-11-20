"use client";

// Library imports
import Link from "next/link";
import { useDispatch } from "react-redux";

// Instance imports
import { UserInstance } from "@/instance/UserInstance";

// CSS imports
import style from "@/app/signup/signup.module.scss";

// Redux imports
import { setMessage } from "@/redux/slices/userAPISlice";

export default function Signup() {
  // Hooks
  const cardDispatch = useDispatch();

  // Functions
  const createUser = async (event: any) => {
    event.preventDefault();

    // References
    const username: any = document.getElementById("username");
    const email: any = document.getElementById("email");
    const password1: any = document.getElementById("password1");
    const password2: any = document.getElementById("password2");

    if (password1.value === password2.value) {
      try {
        const userData = await UserInstance.post("/signup/", {
          username: username.value.trim(),
          email: email.value.trim(),
          password: password1.value.trim(),
        });

        return userData;
      } catch (error: any) {
        const errorMessage: any = error.response.data;
        if (error.response.data.hasOwnProperty("email") === true) {
          cardDispatch(
            setMessage({ message: "Email address already exists." })
          );
        } else if (errorMessage.hasOwnProperty("username") === true) {
          cardDispatch(setMessage({ message: "Username already exists." }));
        }
      }
    } else {
      cardDispatch(setMessage({ message: "Passwords don't match." }));
    }
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.signUpPageContainer} signUpPageContainer`}>
        <div className={`${style.signUpFormContainer} signUpFormContainer`}>
          <h1 className={`${style.headingOfSignUpForm} headingOfSignUpForm`}>
            Sign Up
          </h1>
          <p className={`${style.subHadingOfSignUpForm} subHadingOfSignUpForm`}>
            Already Registered?{" "}
            <Link
              className={`${style.signInLinkInSignUpForm} signInLinkInSignUpForm`}
              href="/signin"
            >
              Sign In.
            </Link>
          </p>
          <form className={`${style.signUpForm} signUpForm`} method="post">
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="email"
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="password1"
              type="password"
              name="password1"
              placeholder="Enter your password"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="password2"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              required
            />
            <button
              className={`${style.signUpFormSubmitButton} signUpFormSubmitButton`}
              type="submit"
              onClick={(event: any) => {
                createUser(event);
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
