import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import ProfileUpdate from "components/ProfileUpdate";
import PasswordChange from "components/PasswordChange";

class ProfileUpdateForm extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tab}>
          <Link to={`/${this.props.username}/profile`}>
            <button className={this.props.editProfile ? styles.clicked : styles.tabButton}>
              {this.context.t("Edit Profile")}
            </button>
          </Link>
          <Link to={`/${this.props.username}/password`}>
            <button className={this.props.editPassword ? styles.clicked : styles.tabButton}>
              {this.context.t("Change Password")}
            </button>
          </Link>
        </div>
        <div className={styles.tabContent}>
          {this.props.editProfile && <ProfileUpdate />}
          {this.props.editPassword && <PasswordChange />}  
        </div>
      </div>
    )
  }
}

ProfileUpdateForm.contextTypes = {
  t: PropTypes.func.isRequired
}

ProfileUpdateForm.propTypes = {
  editProfile: PropTypes.bool.isRequired,
  editPassword: PropTypes.bool.isRequired,
  editProfileFunc: PropTypes.func.isRequired,
  editPasswordFunc: PropTypes.func.isRequired
};

export default ProfileUpdateForm