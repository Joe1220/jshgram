import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import Notification from "components/Notification";

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/">
          <img
            src={require("images/logo.png")}
            className={styles.logo}
            alt={context.t("Logo")}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            value={props.value}
            onChange={props.onInputChange}
            placeholder={context.t("Search")}
            className={styles.searchInput}
          />
        </form>
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <Link to="/explore">
            <Ionicon icon="ios-compass-outline" fontsize="20px" color="black" />
          </Link>
        </div>
        <div className={styles.navIcon} onClick={props.handleNotification}>
          <Ionicon icon="ios-heart-outline" fontsize="20px" color="black" />
          {props.seeingNotification && (
            <Notification notifications={props.notifications} />
          )}
        </div>
        <div className={styles.navIcon}>
          <Link to={`/${props.username}/`}>
            <Ionicon icon="ios-person-outline" fontSize="32px" color="black" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Navigation.propTypes = {
  username: PropTypes.string,
  value: PropTypes.string.isRequired,
  seeingNotification: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleNotification: PropTypes.func.isRequired,
  notifications: PropTypes.array
};

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;