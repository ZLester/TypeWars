import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Form, FormGroup, FormControl, Col, Row, Button, Panel } from 'react-bootstrap';

class Play extends Component {
  componentWillMount() {
    this.props.seedText();
    this.props.clearMainInput();
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.mainInput).focus(); 
  }
  render() {
    const wordNodes = this.props.allWords.map((word, index) => {
      const currentWord = this.props.currentWordIndex === index;
      const valid = this.props.validateMainInput();
      const wordClasses = classNames({
        currentWord,
        'currentWord-valid': currentWord && valid,
        'currentWord-invalid': currentWord && !valid,
      });
      return (<span key={index} ><span className={wordClasses}>{word}</span> </span>);
    });
    const mainInputValidationClass = this.props.getMainInputValidationClass();
    return (
      <div className="text-center">
          <Col className="text-center" smOffset={2} mdOffset={2} sm={8} md={8}>
            <Panel className="panel-primary" header={(<h3>Play</h3>)}>
              <Form onSubmit={() => {return false;}} horizontal>
                {wordNodes}
                <FormGroup 
                  controlId="formMainInput"
                  validationState={mainInputValidationClass}
                >
                  <Col sm={12}>
                    <FormControl 
                      type="text"
                      ref="mainInput"
                      placeholder="Type here...."
                      value={this.props.mainInput}
                      onChange={this.props.handleMainInputChange}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </Panel>
          </Col>
      </div>
    );
  }
};

export default Play;
