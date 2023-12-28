"use client";

// Library imports
import Link from "next/link";
import { useDispatch } from "react-redux";

// Instance imports
import { UserInstance } from "@/services/api/UserInstance";

// CSS imports
import style from "@/app/signup/signup.module.scss";

// Redux imports
import { setJWTToken, setMessage } from "@/redux/slices/userAPISlice";

export default function Signup() {
  // Hooks
  const userAPIDispatch = useDispatch();

  // Functions
  const signUpUser = async (event: any) => {
    event.preventDefault();

    // References
    const username: any = document.getElementById("signUpUsername");
    const firstName: any = document.getElementById("signUpFirstName");
    const lastName: any = document.getElementById("signUpLastName");
    const email: any = document.getElementById("signUpEmail");
    const password1: any = document.getElementById("signUpPassword1");
    const password2: any = document.getElementById("signUpPassword2");

    if (password1.value === password2.value) {
      try {
        const userSingUpData = await UserInstance.post("/signup/", {
          username: username.value.trim(),
          first_name: firstName.value.trim(),
          last_name: lastName.value.trim(),
          email: email.value.trim(),
          password: password1.value.trim(),
        });

        // Dispatching slice
        userAPIDispatch(
          setJWTToken({
            token: {
              refresh: userSingUpData.data.Token.refresh,
              access: userSingUpData.data.Token.access,
            },
          })
        );

        userAPIDispatch(
          setMessage({
            message:
              "Congratulations, your account has been created successfully.",
          })
        );

        // Redirecting page
        window.location.href = "/signin";
      } catch (error: any) {
        const errorMessage: any = error.response.data;
        if (error.response.data.hasOwnProperty("email") === true) {
          userAPIDispatch(
            setMessage({ message: "Email address already exists." })
          );
        } else if (errorMessage.hasOwnProperty("username") === true) {
          userAPIDispatch(setMessage({ message: "Username already exists." }));
        } else if (errorMessage.hasOwnProperty("code") === true) {
          userAPIDispatch(
            setMessage({
              message: "Authorization token is invalid or expired.",
            })
          );
        }
      }
    } else {
      userAPIDispatch(setMessage({ message: "Passwords don't match." }));
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
              id="signUpFirstName"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="signUpLastName"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="signUpUsername"
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="signUpEmail"
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="signUpPassword1"
              type="password"
              name="password1"
              placeholder="Enter your password"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              id="signUpPassword2"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              required
            />
            <button
              className={`${style.signUpFormSubmitButton} signUpFormSubmitButton`}
              type="submit"
              onClick={(event: any) => {
                signUpUser(event);
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
