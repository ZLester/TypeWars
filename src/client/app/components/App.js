import React, { Component, PropTypes } from 'react';
import NavbarTop from './NavbarTop';
import Footer from './Footer';
import Signup from './Signup';
// import io from 'socket.io-client';
// const socket = io();
const { retrieveRandomSnippet } = require('../utils');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showSignupModal: false,
      mainInput: '',
      playing: false,
      currentWord: null,
      currentWordIndex: null,
      remainingWords: null,
      allWords: [],
    };
    this.handleMainInputChange = this.handleMainInputChange.bind(this);
    this.handleSignupModalClose = this.handleSignupModalClose.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.validateMainInput = this.validateMainInput.bind(this);
    this.seedText = this.seedText.bind(this);
    this.getNextWord = this.getNextWord.bind(this);
  }

  handleSignupModalClose() {
    this.setState({ showSignupModal: false });
  }

  handleSignupClick() {
    this.setState({ showSignupModal: true });
  }

  handleMainInputChange(e) {
    this.setState({ mainInput: e.target.value });
  }

  clearMainInput() {
    this.setState({ mainInput: '' });
  }

  validateMainInput() {
    return this.state.currentWord.indexOf(this.state.mainInput) === 0;
  }

  seedText() {
    const sentence = retrieveRandomSnippet();
    const allWords = sentence.split(' ').map(word => word + ' ');
    const currentWord = allWords[0];
    const remainingWords = allWords.slice(1);
    this.setState({
      currentWord,
      currentWordIndex: 0,
      remainingWords,
      allWords,
    });
  }

  getNextWord() {
    if (!this.state.remainingWords.length) {
      return null;
    }
    const nextWord = this.state.remainingWords[0];
    const nextRemainingWords = this.state.remainingWords.slice(1);
    this.setState({
      currentWord: nextWord,
      remainingWords: nextRemainingWords
    });
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
            handleMainInputChange: this.handleMainInputChange,
            mainInput: this.state.mainInput,
            playing: this.state.playing,
            seedText: this.seedText,
            getNextWord: this.getNextWord,
            currentWord: this.state.currentWord,
            currentWordIndex: this.state.currentWordIndex,
            remainingWords: this.state.remainingWords,
            allWords: this.state.allWords,
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
