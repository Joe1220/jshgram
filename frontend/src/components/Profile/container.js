import React, { Component } from "react";
import PropTypes from "prop-types"
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true,
    seeingConfig: false
  };
  static propTypes = {
    username: PropTypes.string.isRequired,
    getProfile: PropTypes.func.isRequired,
    profile: PropTypes.object
  };
  componentDidMount() {
    const { getProfile, username } = this.props;
    if (!this.props.profile) {
      getProfile(username);
    } else {
      this.setState({
        loading: false
      });
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.profile) {
      this.setState({
        loading: false
      });
    }
  };
  _openConfigBox = () => {
    this.setState({
      seeingConfig: !this.state.seeingConfig
    })
  }
  render() {
    const { profile } = this.props;
    return <Profile 
      profile={profile}
      openConfigBox={this._openConfigBox}
      {...this.props} 
      {...this.state} 
    />;
  }
}

export default Container;