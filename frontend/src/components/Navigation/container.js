import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: "",
    seeingNotification: false
  };
  static propTypes = {
    goToSearch: PropTypes.func.isRequired,
    getNotifications: PropTypes.func.isRequired
  };
  render() {
    return (
      <Navigation
        {...this.state}
        username={this.props.username}
        onInputChange={this._onInputChange}
        onSubmit={this._onSubmit}
        handleNotification={this._handleNotification}
        value={this.state.term}
      />
    );
  }
  _onInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      term: value
    });
  };
  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };
  _handleNotification = () => {
    const { seeingNotification } = this.state;
    const { getNotifications } = this.props;
    if (seeingNotification) {
      this.setState({
        seeingNotification: false
      });
    } else {
      getNotifications();
      this.setState({
        seeingNotification: true
      });
    }
  };
}

export default Container;