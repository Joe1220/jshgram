import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

const ResetPassword = (props, context) => (
  <div className={styles.container}>
    <div className={styles.tab} />
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <input
        type="email"
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
        placeholder={context.t("Email")}
        className={styles.textInput}
      />
      <input 
        type="submit" 
        value="password reset" 
        className={styles.button} 
      />
    </form>
  </div>
);

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

ResetPassword.contextTypes = {
  t: PropTypes.func.isRequired
}

export default ResetPassword;