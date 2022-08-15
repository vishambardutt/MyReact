import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function UseState() {
    const [data, setData] = useState('Hello I am rect State')

    function updateData() {
        setData('Hi react state changed')
    }
    return (
        <div>
            <h5>Use State in Functional Component</h5>
            <h5>{data}</h5>
            <Button onClick={updateData}> Ckick for State Change </Button>
        </div>
    );
}

export default UseState;