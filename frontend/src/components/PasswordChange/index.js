import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user: { profile } } = state;
  return { profile };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfile: () => {
      dispatch(userActions.getProfile());
    },
    changePassword: (current_password, new_password) => {
      dispatch(userActions.changePassword(
        current_password, 
        new_password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
