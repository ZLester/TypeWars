import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const Landing = () => (
  <div className="text-center">
    <h1>TypeWars</h1>
    <h3>Increase your typing speed while battling your friends</h3>
    <h4>Click <LinkContainer to="/play"><a>Play</a></LinkContainer> to get started!</h4>
  </div>
);

export default Landing;
