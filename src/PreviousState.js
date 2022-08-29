import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
let PreviousState = () => {
    let [number, setNumber] = useState(1)
    let updateNumber = () => {

        // let rvalue = Math.floor(Math.random() * 10)

        // setNumber((prevalue) => {
        //     console.log('prevalue');
        //     if (prevalue.rand < 4) {
        //         alert('low value');
        //     }
        //     return rvalue;

       // })
       for (let i = 0; i < 5; i++)
       {
        setNumber((preval)=> preval+1)
       }
      
    }
    return (
        <div>
            <h5>Previous State{number}</h5>
            <Button onClick={updateNumber}>Set Number</Button>
        </div>
    );
}

export default PreviousState;