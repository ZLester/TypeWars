import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Form, FormGroup, FormControl, Col, Row, Button, Panel } from 'react-bootstrap';
import GamePanel from '../GamePanel';
import Timer from '../Timer';

class Play extends Component {
  componentWillMount() {
    this.props.clearMainInput();
    this.props.startGame();
  }
  
  componentWillUnmount() {
    this.props.resetGame();
  }

  createWordNodes() {
    return this.props.allWords.map((word, index) => {
      const currentWord = this.props.currentWordIndex === index;
      const valid = this.props.getMainInputValid();
      const wordClasses = classNames({
        currentWord,
        'currentWord-valid': currentWord && valid,
        'currentWord-invalid': currentWord && !valid,
      });
      return (<span key={index} ><span className={wordClasses}>{word}</span> </span>);
    });
  }

  render() {
    const wordNodes = this.createWordNodes();
    const mainInputDisabled = this.props.getMainInputDisabled();
    const mainInputValidationClass = this.props.getMainInputValidationClass();
    const mainInputPlaceHolder = this.props.getMainInputPlaceHolder();
    const elapsedSeconds = this.props.getElapsedSeconds();
    return (
      <div>
        <Col className="text-center" sm={2} md={2}>
          <Timer elapsedSeconds={elapsedSeconds} />
        </Col>
        <Col className="text-center" sm={8} md={8}>
          <GamePanel 
            wordNodes={wordNodes}
            mainInput={this.props.mainInput}
            mainInputDisabled={mainInputDisabled}
            mainInputValidationClass={mainInputValidationClass}
            mainInputPlaceHolder={mainInputPlaceHolder}
            handleMainInputChange={this.props.handleMainInputChange}
          />
        </Col>
      </div>
    );
  }
};

export default Play;
