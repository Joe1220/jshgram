import React, { Component } from "react";
import ProfileUpdateForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  static propTypes = {
    username: PropTypes.string
  };
  state = {
    editProfile: true,
    editPassword: false
  };
  componentDidMount() {
    this._renderPath();
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.path !== this.props.match.path) {
      this._renderPath();
    }
  };
  render() {
    return (
      <ProfileUpdateForm
        {...this.props}
        {...this.state}
        editProfileFunc={this._editProfileFunc}
        editPasswordFunc={this._editPasswordFunc}
        renderPath={this.__renderPath}
      />
    );
  }
  _renderPath = () => {
    const { path } = this.props.match;
    if (path === "/:username/profile") {
      this._editProfileFunc();
    } else if ("/:username/password") {
      this._editPasswordFunc();
    }
  };
  _editProfileFunc = () => {
    this.setState({
      editProfile: true,
      editPassword: false
    });
  };
  _editPasswordFunc = () => {
    this.setState({
      editProfile: false,
      editPassword: true
    });
  };
}

export default Container;
