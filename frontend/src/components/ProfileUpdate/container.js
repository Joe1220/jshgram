import React, { Component } from "react";
import ProfileUpdate from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    userName: "",
    name: "",
    website: "",
    bio: "",
    email: "",
    gender: null,
    profile_image: null
  };

  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value || null
    });
  };

  _handleImageChange = event => {
    event.preventDefault();
    this.props.changeAvatar(event.target.files ? event.target.files[0] : "");
  }

  _submitUpdateProfile = event => {
    const { putUpdateProfile } = this.props;
    const { userName, name, website, bio, email, gender } = this.state;
    event.preventDefault();
    putUpdateProfile(userName, name, website, bio, email, gender);
  };

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.profile) {
      this.setState({
        userName: nextProps.profile.username,
        name: nextProps.profile.name,
        website: nextProps.profile.website,
        bio: nextProps.profile.bio,
        email: nextProps.profile.email,
        gender: nextProps.profile.gender,
        profile_image: nextProps.profile.profile_image
      });
    }
  };

  render() {
    return (
      <ProfileUpdate
        {...this.state}
        {...this.props}
        submitUpdateProfile={this._submitUpdateProfile}
        handleInputChange={this._handleInputChange}
        handleImageChange={this._handleImageChange}
        profile={this.props.profile}
      />
    );
  }
  static propTypes = {
    profile: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired,
      name: PropTypes.string,
      bio: PropTypes.string,
      website: PropTypes.string,
      gender: PropTypes.string,
      email: PropTypes.string.isRequired
    }),
    putUpdateProfile: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    changeAvatar: PropTypes.func.isRequired
  };
}

export default Container;