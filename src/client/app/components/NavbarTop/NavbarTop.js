import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavTop = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>MRRN Starter</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/about"><NavItem eventKey={1}>About</NavItem></LinkContainer>
        <LinkContainer to="/profile"><NavItem eventKey={2}>Profile</NavItem></LinkContainer>
        <LinkContainer to="/signin"><NavItem eventKey={3}>Sign in</NavItem></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavTop;
