import React, { Component } from "react";
import PropTypes from "prop-types";
import ResetPassword from "./presenter";

class Container extends Component {
  state = {
    email: ""
  };
  static propTypes = {
    resetPassword: PropTypes.func.isRequired
  };
  render() {
    const { email } = this.state;
    return (
      <ResetPassword
        emailValue={email}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }
  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
    const { email } = this.state;
    const { resetPassword } = this.props;
    resetPassword(email);
  };
}

export default Container;