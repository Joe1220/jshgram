import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user: { profile } } = state;
  return {
    profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfile: () => {
      dispatch(userActions.getProfile());
    },
    putUpdateProfile: (userName, name, website, bio, email, gender) => {
      dispatch(userActions.putUpdateProfile(userName, name, website, bio, email, gender));
    },
    changeAvatar: (image) => {
      dispatch(userActions.changeAvatar(image));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
