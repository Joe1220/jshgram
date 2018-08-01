import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoComments = props => (
  <div className={styles.comments}>
    <ul className={styles.list}>
      <Comment username={props.creator} comment={props.caption} />
      {props.comments.map(comment => (
        <Comment
          deleteComment={props.deleteComment}
          id={comment.id}
          username={comment.creator.username}
          comment={comment.message}
          is_owner={comment.is_owner}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.comment}>
    <div className={styles.column}>
      <span className={styles.username}>{props.username}</span>{" "}
      <span className={styles.message}>{props.comment}</span>
    </div>
    <span className={styles.deleteComment} onClick={() => props.deleteComment(props.id)}>
      {props.is_owner && (
        <Ionicon icon="ios-close" fontSize="28px" color="black" />
      )}
    </span>
  </li>
);

PhotoComments.propTypes = {
  caption: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      is_owner: PropTypes.bool,
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default PhotoComments;
