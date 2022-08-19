import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const UseStateh = () => {
    let [name, setName] = useState('Vishambar')
    return (
        <div>
            <h5>Use State Hook </h5>
            <h6>State Changed: {name} </h6>
            <Button onClick={() => setName('Jakhmola')}>Change State</Button>
        </div>
    );

}

export default UseStateh;



