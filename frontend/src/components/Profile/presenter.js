import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import Loading from "components/Loading";
import styles from "./styles.scss";
import PhotoDisplay from "components/PhotoDisplay";
import ConfigBox from "components/ConfigBox";
import { Link } from "react-router-dom";

const Profile = props => {
  if (props.loading) {
    return <LoadingUserProfile />;
  } else if (props.profile) {
    return <RenderUserProfile {...props} />;
  }
};

const LoadingUserProfile = props => (
  <div className={styles.loading}>
    <Loading />
  </div>
);

const RenderUserProfile = (props, context) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <img 
          src={props.profile.profile_image || require("images/noPhoto.jpg")}
          alt={props.profile.username}  
          className={styles.avatar}
        />
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.username}>
              {props.profile.username}
            </span>
            <Link to={`/${props.username}/profile`}>
              <button className={styles.button}>
                {context.t("Edit Profile")}
              </button>
            </Link>
            <span className={styles.icon} onClick={props.openConfigBox}>
              <Ionicon icon="ios-settings" fontSize="30px" color="black" />
              {props.seeingConfig && <ConfigBox />}
            </span>
          </div>
          <div className={styles.follow}>
            <span className={styles.followContent}>
              {props.profile.post_count}{" "}
              {context.t("posts")}
            </span>
            <span className={styles.followContent}>
              {props.profile.followers_count}{" "}
              {context.t("followers")}
            </span>
            <span className={styles.followContent}>
              {props.profile.following_count}{" "}
              {context.t("following")}
            </span>
          </div>
          <div className={styles.describe}>
            <span className={styles.username}>
              {props.profile.username}
            </span>
            <span className={styles.bio}>
              {props.profile.bio}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.column}>
        {props.profile.images.map(image => {
            return (
              <PhotoDisplay 
                key={image.id}
                photo={image}
              />
            )
          })}
      </div>
    </div>
  )
}

RenderUserProfile.contextTypes = {
  t: PropTypes.func.isRequired
};

Profile.propTypes = {
  loading: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    followers_count: PropTypes.number.isRequired,
    following_count: PropTypes.number.isRequired,
    post_count: PropTypes.number.isRequired,
    bio: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        file: PropTypes.string.isRequired,
        like_count: PropTypes.number,
        comment_count: PropTypes.number
      })
    ).isRequired
  }),
  openConfigBox: PropTypes.func.isRequired
};

export default Profile;