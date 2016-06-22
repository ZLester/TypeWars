import React, { Component, PropTypes } from 'react';
import NavbarTop from './NavbarTop';
import Footer from './Footer';
import Signup from './Signup';
import io from 'socket.io-client';
const socket = io();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showSignupModal: false,
      socket: null,
    };
    this.handleSignupModalClose = this.handleSignupModalClose.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  componentWillMount() {
    console.log(socket);
  }

  handleSignupModalClose() {
    this.setState({ showSignupModal: false });
  }

  handleSignupClick() {
    this.setState({ showSignupModal: true });
  }

  render() {
    return (
      <div>
        <NavbarTop />
        <Signup
          showSignupModal={this.state.showSignupModal}
          handleSignupModalClose={this.handleSignupModalClose}
        />
        <div>
          {this.props.children && React.cloneElement(this.props.children, {
            handleSignupClick: this.handleSignupClick,
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
