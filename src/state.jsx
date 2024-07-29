import React, { useState } from 'react';

function State() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className='developer'>
      <h2>Greeting Component</h2>
      <p>Hello! This is a simple greeting component.</p>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}

export default State;
