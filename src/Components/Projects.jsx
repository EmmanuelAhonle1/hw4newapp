import React from 'react';
import Counter from './Counter';

function MyComponent(props) {
  // You can access props here
  const { text } = props;

  return (
    <div>
      <h1>My React Component</h1>
      <Counter text = {text}/>
    </div>
  );
}

export default MyComponent;