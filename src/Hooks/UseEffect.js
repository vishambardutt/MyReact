import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const UseEffect = (props) => {
  const [count, setCount] = useState(5);
  const [name, setName] = useState(10);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('Use effect Count called')
  },[count]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log('Use effect name called')
  },[]);

  return (
    <div>
      <h5>Use Effect Hook</h5>
      <h6> Count: {count} times</h6>
      <h6> Name: {name} times</h6>
      <h6><Button onClick = {() => setCount(count + 1)}>Use Effect Count</Button></h6>
      <h6><Button onClick = {() => setName(name +1)}>Use Effect Name</Button></h6>
    </div>
  );
}
export default UseEffect;

// React.useEffect(()=>{

// })