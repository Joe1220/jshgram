import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ConfigBox = (props, context) => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.content}>
        <Link to={`/${props.username}/profile`}>
          <span className={styles.item}>{context.t("change profile")}</span>
        </Link>
        <span className={styles.item} onClick={props.logout}>
          {context.t("logout")}
        </span>
        <span className={styles.item}>{context.t("cancel")}</span>
      </div>
    </div>
  </div>
);

ConfigBox.propTypes = {
  username: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}

ConfigBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default ConfigBox;
