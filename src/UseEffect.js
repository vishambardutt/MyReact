import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
function UseEffect() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
        <h5>Use Effect Hook</h5>
      <h5>You clicked {count} times</h5>
      <Button onClick={() => setCount(count + 1)}>Click for Use Effect</Button>
    </div>
  );
}
export default UseEffect;