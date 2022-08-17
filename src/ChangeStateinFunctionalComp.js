import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ChangeStateinFunctionalComp() {
    const [data, setData] = useState('Hello I am Rect State')

    function updateData() {
        setData('Hi React State Changed')
    }
    return (
        <div>
            <h5>Change  State in Functional Component</h5>
            <h5>{data}</h5>
            <Button onClick={updateData}>CLICK FOR CHANGE STATE </Button>
        </div>
    );
}

export default ChangeStateinFunctionalComp;