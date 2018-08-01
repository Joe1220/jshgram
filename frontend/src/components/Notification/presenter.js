import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import NotificationRow from "components/NotificationRow";

const Notification = props => {
  if(props.loading) {
    return <RenderLoading />;
  } else {
    return (
     <RenderNotification {...props} /> 
    )
  }
}

const RenderLoading = props => (
  <div className={styles.container}>
    <div className={styles.box}>
      <span className={styles.loading}>
        <Loading />
      </span>
    </div>
  </div>
);

const RenderNotification = props => {
  const { notifications } = props;
  return <div className={styles.container}>
      <div className={styles.box}>
        {notifications.map(noti => (
          <NotificationRow
            key={noti.id}
            creator={noti.creator}
            image={noti.image}
            comment={noti.comment}
            natural_time={noti.natural_time}
            notification_type={noti.notification_type}
          />
        ))}
      </div>
    </div>;
}

Notification.propTypes = {
  notifications: PropTypes.array
};

export default Notification;