import React from 'react';
import { Form, FormGroup, FormControl, Col, Row, Button, Panel } from 'react-bootstrap';

const Signin = () => {
  return (
    <div className="container text-center">
      <Row>
        <Col className="text-center" smOffset={2} mdOffset={2} sm={8} md={8}>
          <Panel header={<h3>Signin</h3>}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalUsername">
                <Col sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Button className="pull-right" type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <p><a className="link">Forgot your password?</a></p>
                  <p>Don't have an account? <a className="link">Sign up</a></p>
                </Col>
              </FormGroup>
            </Form>
          </Panel>
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
