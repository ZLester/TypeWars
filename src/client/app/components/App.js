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
      countDown: null,
      gameTimeStart: null,
      gameTimeElapsed: 0,
    };
    this.handleMainInputChange = this.handleMainInputChange.bind(this);
    this.handleSignupModalClose = this.handleSignupModalClose.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.clearMainInput = this.clearMainInput.bind(this);
    this.getMainInputValid = this.getMainInputValid.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
    this.getMainInputValidationClass = this.getMainInputValidationClass.bind(this);
    this.seedText = this.seedText.bind(this);
    this.getNextWord = this.getNextWord.bind(this);
    this.tick = this.tick.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.startTime = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.getElapsedSeconds = this.getElapsedSeconds.bind(this);
    this.getMainInputPlaceHolder = this.getMainInputPlaceHolder.bind(this);
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

  getMainInputValid() {
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
    const valid = this.getMainInputValid();
    return valid ? 'success' : 'error';
  }

  getMainInputDisabled() {
    return this.getElapsedSeconds() < 3;
  }

  getMainInputPlaceHolder() {
    return this.getMainInputDisabled() ? 'Get Ready...' : 'Type Here...';
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

  getElapsedSeconds() {
    const raw = this.state.gameTimeElapsed;
    const seconds = Math.floor(raw / 1000);
    return seconds;
  }

  startTimer() {
    this.timer = setInterval(this.tick, 100);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ gameTimeElapsed: new Date() - this.state.gameTimeStart });
  }

  startGame() {
    this.setState({ 
      gameTimeStart: Date.now(),
      gameTimeElapsed: 0,
    }, () => {
      this.seedText();
      this.startTimer();
    });
  }
  
  resetGame() {
    this.stopTimer();
  }

  endGame() {
    const timeTaken = this.getElapsedSeconds();
    const charactersTyped = this.state.allWords.join(' ').length;
    const wpm = (charactersTyped / 5) / ( timeTaken / 60 );
    this.resetGame();
  }


  getNextWord() {
    if (!this.state.remainingWords.length) {
      this.endGame();
      return this.startGame();
    }
    const nextWord = this.state.remainingWords[0];
    const nextWordIndex = this.state.currentWordIndex + 1;
    const nextRemainingWords = this.state.remainingWords.slice(1);
    this.setState({
      currentWord: nextWord,
      currentWordIndex: nextWordIndex,
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
            startGame: this.startGame,
            endGame: this.endGame,
            getNextWord: this.getNextWord,
            getMainInputValid: this.getMainInputValid,
            mainInput: this.state.mainInput,
            playing: this.state.playing,
            countDown: this.state.countDown,
            getMainInputValidationClass: this.getMainInputValidationClass,
            getMainInputDisabled: this.getMainInputDisabled,
            currentWord: this.state.currentWord,
            currentWordIndex: this.state.currentWordIndex,
            remainingWords: this.state.remainingWords,
            getElapsedSeconds: this.getElapsedSeconds,
            allWords: this.state.allWords,
            resetGame: this.resetGame,
            getMainInputPlaceHolder: this.getMainInputPlaceHolder,
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
