import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Col } from 'react-bootstrap';

class MainInput extends Component {

  componentDidUpdate() {
    if (!this.props.mainInputDisabled) {
      this.focusMainInput();
    }
  }

  focusMainInput() {
    ReactDOM.findDOMNode(this.refs.mainInput).focus();
  }

  render() {
    return (
      <Form onSubmit={() => {return false; }} horizontal>
        <FormGroup 
          controlId="formMainInput"
          validationState={this.props.mainInputValidationClass}
        >
          <Col sm={12}>
            <FormControl 
              type="text"
              ref="mainInput"
              placeholder={this.props.mainInputPlaceHolder}
              disabled={this.props.mainInputDisabled}
              value={this.props.mainInput}
              onChange={this.props.handleMainInputChange}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
};

export default MainInput;
