import React, { Component } from "react";
import Notification from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    notifications: PropTypes.array
  };
  componentDidMount() {
    const { notifications } = this.props;
    if (notifications) {
      this.setState({
        loading: false
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return <Notification loading={this.state.loading} {...this.props} />;
  }
}

export default Container;