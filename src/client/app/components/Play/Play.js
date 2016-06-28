import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Row, Button, Panel } from 'react-bootstrap';

class Play extends Component {
  componentWillMount() {
    this.props.seedText();
  }
  render() {
    console.log(this.props);
    const wordNodes = this.props.allWords.map((word, index) => {
      const classes = this.props.currentWordIndex === index ? "wordNode currentWord" : "wordNode";
      return (<span key={index} className={classes}>{word}</span>)
    });
    return (
    <div className="text-center">
      <Row>
        <Col className="text-center" smOffset={2} mdOffset={2} sm={8} md={8}>
          <Panel className="panel-primary" header={(<h1>Play</h1>)}>
            <Form horizontal>
              {wordNodes}
              <FormGroup controlId="formMainInput">
                <Col sm={12}>
                  <FormControl 
                    type="text"
                    placeholder="Waiting for other players...."
                    value={this.props.mainInput}
                    onChange={this.props.handleMainInputChange}
                  />
                </Col>
              </FormGroup>
            </Form>
          </Panel>
        </Col>
      </Row>
    </div>
    );
  }
};

export default Play;
