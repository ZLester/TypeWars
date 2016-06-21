import React, { Component, PropTypes } from 'react';
import NavbarTop from './NavbarTop';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <div>
        <NavbarTop />
        <div>
          {this.props.children}
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
