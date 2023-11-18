// Library imports
import Link from "next/link";

// CSS imports
import style from "@/app/signup/signup.module.scss";

export default function signin() {
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
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              type="password"
              name="password1"
              placeholder="Enter your password"
              required
            />
            <input
              className={`${style.signUpFormInputField} signUpFormInputField`}
              type="password"
              name="password2"
              placeholder="Confirm your password"
              required
            />
            <button
              className={`${style.signUpFormSubmitButton} signUpFormSubmitButton`}
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
