import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavTop = ({ loggedIn }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/"><a>TypeWars</a></LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/play"><NavItem eventKey={1}>Play</NavItem></LinkContainer>
        {loggedIn ? <LinkContainer to="/profile"><NavItem eventKey={2}>Profile</NavItem></LinkContainer> : null}
        <LinkContainer to="/about"><NavItem eventKey={3}>About</NavItem></LinkContainer>
        <LinkContainer to="/signin"><NavItem eventKey={4}>Sign in</NavItem></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavTop;
