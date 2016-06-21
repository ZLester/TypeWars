import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import TypeWriter from 'react-typewriter';

const Landing = () => (
  <div className="text-center">
    <h1 className="landing-title">TypeWars</h1>
    <div className="typewriter-container">
      <TypeWriter typing={1}>
        <h3>Increase your typing speed while battling your friends!</h3>
      </TypeWriter>
    </div>
    <h4>Click <LinkContainer to="/play"><a>Play</a></LinkContainer> to get started!</h4>
  </div>
);

export default Landing;
