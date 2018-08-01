import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user: { username, profile }} = state;
  return {
    username,
    profile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: { username } } } = ownProps;
  return {
    getProfile: () => {
      dispatch(userActions.getProfile(username));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);