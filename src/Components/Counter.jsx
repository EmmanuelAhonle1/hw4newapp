import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
    const {text} = props
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1> {text} </h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
    

  );
}

export default Counter;