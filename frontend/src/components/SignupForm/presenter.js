import React from "react";
// import Ionicon from "react-ionicons";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";
import propTypes from "prop-types";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <FacebookLogin
      appId="155702698444190"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.facebookLink}
      icon="fa-facebook-official"
      textButton={context.t("Log in with Facebook")}
    />
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="email"
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
        placeholder={context.t("Email")}
        className={formStyles.textInput}
      />
      <input
        type="text"
        value={props.fullnameValue}
        onChange={props.handleInputChange}
        name="name"
        placeholder={context.t("name")}
        className={formStyles.textInput}
      />
      <input
        type="username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
      />
      <input
        type="password"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
      />
      <input type="submit" value="Sign up" className={formStyles.button} />
    </form>
    <p className={formStyles.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>
    </p>
  </div>
);

SignupForm.propTypes = {
  handleInputChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  handleFacebookLogin: propTypes.func.isRequired,
  emailValue: propTypes.string.isRequired,
  nameValue: propTypes.string.isRequired,
  usernameValue: propTypes.string.isRequired,
  passwordValue: propTypes.string.isRequired
}

SignupForm.contextTypes = {
  t: propTypes.func.isRequired
};

export default SignupForm;