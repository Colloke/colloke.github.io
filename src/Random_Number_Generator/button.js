import React from 'react';
import { useState } from 'react';

const Button = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 100));
  };

  return (
    <div>
      <button onClick={handleClick}>Random #</button>
      <h1>{num}</h1>
    </div>
  );
};

export default Button;