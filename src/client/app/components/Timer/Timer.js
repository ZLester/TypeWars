import React from 'react';

const getTimerDisplay = (seconds) => {
  if (seconds > 3) {
    return seconds - 3;
  } 
  return 3 - seconds === 0 ? 'GO!' : 3 - seconds;
}

const Timer = ({ elapsedSeconds }) => {
  const timerDisplay = getTimerDisplay(elapsedSeconds);
  return (
    <div>
      <h1>{timerDisplay}</h1>
    </div>
  );
}

export default Timer;
