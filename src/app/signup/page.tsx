// Library imports
import Link from "next/link";

// CSS imports
import style from "@/app/layout.module.scss";

export default function signin() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.signUpPageContainer} signUpPageContainer`}>
        <div className={`${style.signUpFormContainer} signUpFormContainer`}>
          <h1 className={`${style.headingOfSignUpForm} headingOfSignUpForm`}>
            Signup
          </h1>
          <p className={`${style.subHadingOfSignUpForm} subHadingOfSignUpForm`}>
            Already Registered?
            <Link
              className={`${style.signInLinkInSignUpForm} signInLinkInSignUpForm`}
              href="/signin"
            >
              Sign in here.
            </Link>
          </p>
          <form
            className={`${style.signUpForm} signUpForm`}
            method="post"
            action="/auth/signup/"
          >
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
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
