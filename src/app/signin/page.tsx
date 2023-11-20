// Library imports
import Link from "next/link";

// CSS imports
import style from "@/app/signin/signin.module.scss";

export default function Signin() {
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
