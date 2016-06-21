import React, { Component, PropTypes } from 'react';
import NavbarTop from './NavbarTop';
import Footer from './Footer';
import Signup from './Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showSignupModal: false,
    };
    this.handleSignupModalClose = this.handleSignupModalClose.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
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
