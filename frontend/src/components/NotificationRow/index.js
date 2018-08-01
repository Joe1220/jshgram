import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import TimeStamp from "components/TimeStamp";

const NotificationRow = props => {
  return <div className={styles.container}>
      <div className={styles.column}>
        <img src={props.creator.profile_image || require("images/noPhoto.jpg")} alt={props.creator.username} className={styles.avatar} />
        <span className={styles.name}>{props.creator.username}</span>
        <span className={styles.comment}>
          <RenderNotificationType comment={props.comment ? props.comment : null} type={props.notification_type} />
        </span>
        <span className={styles.time}>
          <TimeStamp time={props.natural_time} />
        </span>
      </div>
      <span className={styles.fileImage}>
          {props.image ? (
            <img
              src={props.image.file}
              alt="file"
            />
          ) : null}
        </span>
    </div>;
}

const RenderNotificationType = props => {
  const { type, comment } = props;
  if(type === 'like') {
    return 'liked your photo';
  } else if(type === 'comment') {
    if(comment.length > 15) {
      return "commented"+comment.substring(0,15)+"...";
    } else {
      return `commented: ${comment}`;
    }
  } else if(type === 'follow') {
    return 'started following you';
  } else {
    return 'error'
  }
}

NotificationRow.propTypes = {
  comment: PropTypes.string,
  image: PropTypes.shape({
    file: PropTypes.string
  }),
  notification_type: PropTypes.string.isRequired,
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  natural_time: PropTypes.string.isRequired
};

RenderNotificationType.propTypes = {
  comment: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default NotificationRow;