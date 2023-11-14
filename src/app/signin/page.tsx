// Library imports
import Link from "next/link";

// CSS imports
import style from "@/app/layout.module.scss";

export default function signin() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.signInPageContainer} signInPageContainer`}>
        <div className={`${style.signInFormContainer} signInFormContainer`}>
          <h1 className={`${style.headingOfSignInForm} headingOfSignInForm`}>
            Signin
          </h1>
          <p
            className={`${style.subHeadingOfSignInForm} subHeadingOfSignInForm`}
          >
            Sign in to continue.
          </p>
          <form className={`${style.SignInForm} SignInForm`} method="post">
            <input
              className={`${style.signInFormInputField} signInFormInputField`}
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
            <input
              className={`${style.signInFormInputField} signInFormInputField`}
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button
              className={`${style.signInFormSubmitButton} signInFormSubmitButton`}
              type="submit"
            >
              Signin
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
            Signup!
          </Link>
        </div>
      </div>
    </>
  );
}
