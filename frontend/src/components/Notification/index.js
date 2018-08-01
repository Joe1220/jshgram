import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  return {
    notifications: state.user.notifications
  }
}

export default connect(mapStateToProps)(Container);