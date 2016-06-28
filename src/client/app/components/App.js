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
    this.clearMainInput = this.clearMainInput.bind(this);
    this.handleSignupModalClose = this.handleSignupModalClose.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.validateMainInput = this.validateMainInput.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
    this.getMainInputValidationClass = this.getMainInputValidationClass.bind(this);
    this.seedText = this.seedText.bind(this);
    this.getNextWord = this.getNextWord.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  handleSignupModalClose() {
    this.setState({ showSignupModal: false });
  }

  handleSignupClick() {
    this.setState({ showSignupModal: true });
  }

  handleMainInputChange(e) {
    this.setState({ mainInput: e.target.value }, () => {
      this.validateAnswer();
    });
  }

  clearMainInput() {
    this.setState({ mainInput: '' });
  }

  validateMainInput() {
    const mainInput = this.state.mainInput;
    const currentWordPadded = this.state.currentWord + ' ';
    return currentWordPadded.indexOf(mainInput) === 0;
  }

  validateAnswer() {
    const mainInput = this.state.mainInput;
    const currentWordPadded = this.state.remainingWords.length ? this.state.currentWord + ' ' : this.state.currentWord;
    if (mainInput === currentWordPadded) {
      this.getNextWord();
      this.clearMainInput();
    }
  }

  getMainInputValidationClass() {
    if (this.state.mainInput === '') {
      return null;
    }
    const valid = this.validateMainInput();
    return valid ? 'success' : 'error';
  }

  seedText() {
    const sentence = retrieveRandomSnippet();
    const allWords = sentence.split(' ');
    const currentWord = allWords[0];
    const remainingWords = allWords.slice(1);
    this.setState({
      currentWord,
      currentWordIndex: 0,
      remainingWords,
      allWords,
    });
  }

  endGame() {
    this.seedText();
  }

  getNextWord() {
    if (!this.state.remainingWords.length) {
      return this.endGame();
    }
    const nextWord = this.state.remainingWords[0];
    const nextIndex = this.state.currentWordIndex + 1;
    const nextRemainingWords = this.state.remainingWords.slice(1);
    this.setState({
      currentWord: nextWord,
      currentWordIndex: nextIndex,
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
            clearMainInput: this.clearMainInput,
            mainInput: this.state.mainInput,
            playing: this.state.playing,
            seedText: this.seedText,
            getNextWord: this.getNextWord,
            validateMainInput: this.validateMainInput,
            getMainInputValidationClass: this.getMainInputValidationClass,
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
