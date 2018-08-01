import React, { Component } from "react";
import PasswordChange from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    username: "",
    profile_image: null,
    current_password: "",
    new_password: "",
    check_password: ""
  };

  render() {
    return (
      <PasswordChange
        {...this.props}
        {...this.state}
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
    const { changePassword } = this.props;
    const { 
      current_password, 
      new_password, 
      check_password 
    } = this.state;
    event.preventDefault();

    if(new_password === check_password) {
      changePassword(current_password, new_password);
    }
  };

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.profile) {
      this.setState({
        username: nextProps.profile.username,
        profile_image: nextProps.profile.profile_image
      });
    }
  };

  static propTypes = {
    getProfile: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired
  };
}

export default Container;