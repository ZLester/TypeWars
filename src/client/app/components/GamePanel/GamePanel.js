import React from 'react';
import { Panel } from 'react-bootstrap';
import MainInput from '../MainInput';

const GamePanel = ({ wordNodes, mainInputDisabled, mainInputValidationClass, mainInputPlaceHolder, mainInput, handleMainInputChange }) => {
  const header = (<h3>Play</h3>)
  return (
    <Panel className="panel-primary" header={header}>
      {wordNodes}
      <MainInput
        mainInputDisabled={mainInputDisabled}
        mainInputValidationClass={mainInputValidationClass}
        mainInputPlaceHolder={mainInputPlaceHolder}
        mainInput={mainInput}
        handleMainInputChange={handleMainInputChange}
      />
    </Panel>
  );
}

export default GamePanel;
