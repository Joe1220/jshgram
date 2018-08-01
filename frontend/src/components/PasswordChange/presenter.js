import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";

class PasswordChange extends Component {
  render() {
    if(!this.props.profile) {
      return (
        <div className={styles.loading}>
          <Loading />
        </div>
      )
    } else {
      return <div className={styles.formComponent}>
          <div className={styles.imageField}>
            <div className={styles.image}>
              <img src={this.props.profile_image || require("images/noPhoto.jpg")} alt={this.props.username} className={styles.avatar} />
            </div>
            <span className={styles.username}>{this.props.username}</span>
          </div>
          <form className={styles.form} onSubmit={this.props.handleSubmit}>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("current password")}
              </span>
              <input type="password" 
                className={styles.input}
                value={this.props.current_password} 
                onChange={this.props.handleInputChange} 
                name="current_password" 
              />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("new password")}
              </span>
              <input 
                type="password" 
                className={styles.input} 
                value={this.props.new_password} 
                onChange={this.props.handleInputChange} 
                name="new_password" 
              />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("check Password")}
              </span>
              <input 
                type="password" 
                className={styles.input} 
                value={this.props.check_password} 
                onChange={this.props.handleInputChange} 
                name="check_password" 
              />
            </div>
            <input 
              type="submit" 
              className={styles.button} 
              value={this.context.t("Submit")} 
            />
          </form>
        </div>;
    }
  }

  static propTypes = {
    profile: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired
    }),
    current_password: PropTypes.string.isRequired,
    check_password: PropTypes.string.isRequired,
    new_password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }
  static contextTypes = {
    t: PropTypes.func.isRequired
  }
}

export default PasswordChange;