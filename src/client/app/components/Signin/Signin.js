import React, { PropTypes } from 'react';
import { Form, FormGroup, FormControl, Col, Row, Button, Panel } from 'react-bootstrap';

const Signin = ({ handleSignupClick }) => {
  const header = (<h3>Sign in</h3>);
  return (
    <div className="container text-center">
      <Row>
        <Col className="text-center" smOffset={3} mdOffset={3} sm={6} md={6}>
          <Panel className="panel-primary" header={header}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={12}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalUsername">
                <Col sm={12}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Button className="pull-right">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <p>Don't have an account? <a className="link" onClick={handleSignupClick} >Sign up</a></p>
                </Col>
              </FormGroup>
            </Form>
          </Panel>
        </Col>
      </Row>
    </div>
  );
};

Signin.propTypes = {
  handleSignupClick: PropTypes.func.isRequired,
};

export default Signin;
