import React, { PropTypes } from 'react';
import { Modal, Button, Row, Col, Panel, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';

const Signup = ({ showSignupModal, handleSignupModalClose }) => {
  return (
    <Modal show={showSignupModal} onHide={handleSignupModalClose}>
      <Modal.Header className="alert-primary" bsStyle="alert-danger" closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Form horizontal>
              <FormGroup controlId="formHorizontalFirstname">
                <Col sm={1} md={1} />
                <Col sm={10} md={10}>
                  <InputGroup>
                    <InputGroup.Addon className="input-icon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="First Name" />
                  </InputGroup>
                </Col>
                <Col sm={1} md={1} />
              </FormGroup>
              <FormGroup controlId="formHorizontalLastname">
                <Col sm={1} md={1} />
                <Col sm={10}md={10}>
                  <InputGroup>
                    <InputGroup.Addon className="input-icon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Last Name" />
                  </InputGroup>
                </Col>
                <Col sm={1} md={1} />
              </FormGroup>
              <FormGroup controlId="formHorizontalDisplayname">
                <Col sm={1} md={1} />
                <Col sm={10}md={10}>
                  <InputGroup>
                    <InputGroup.Addon className="input-icon">
                      <i className="fa fa-television" aria-hidden="true"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Display Name" />
                  </InputGroup>
                </Col>
                <Col sm={1} md={1} />
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={1} md={1} />
                <Col sm={10} md={10}>
                  <InputGroup>
                    <InputGroup.Addon className="input-icon">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </InputGroup.Addon>
                    <FormControl type="email" placeholder="Email" />
                  </InputGroup>
                </Col>
                <Col sm={1} md={1} />
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={1} md={1} />
                <Col sm={10} md={10}>
                  <InputGroup>
                    <InputGroup.Addon className="input-icon">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </InputGroup.Addon>
                    <FormControl type="password" placeholder="Password" />
                  </InputGroup>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalConfirmPassword">
                <Col sm={1} md={1} />
                <Col sm={10} md={10}>
                  <InputGroup>
                    <InputGroup.Addon className="input-icon">
                      <i className="fa fa-repeat" aria-hidden="true"></i>
                    </InputGroup.Addon>
                    <FormControl type="password" placeholder="Confirm Password" />
                  </InputGroup>
                </Col>
                <Col sm={1} md={1} />
              </FormGroup>
              <FormGroup>
                <Col sm={1} md={1} />
                <Col sm={10} md={10}>
                  <Button className="pull-right">
                    Submit
                  </Button>
                </Col>
                <Col sm={1} md={1} />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

Signup.propTypes = {
  showSignupModal: PropTypes.bool,
  handleSignupModalClose: PropTypes.func,
};

export default Signup;
