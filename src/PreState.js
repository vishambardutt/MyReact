import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PreviousState from './PreviousState';

let PreState = () => {
    let [count, setCount] = useState(0);

   function setUpdateCount(){
    setCount(count+1)
   }
    return (
        <div>
            <h5>{count}</h5>
            <Button onclick={setUpdateCount}>CLICK HERE</Button>
            <PreviousState/>
        </div>
    );
}
export default PreState;