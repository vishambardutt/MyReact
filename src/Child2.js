
import React from 'react';
import Button from 'react-bootstrap/Button';
function Child2(props) {
    return (
        <div>
            <h5>This is child component</h5>
            <Button variant='primary' onClick={props.data}>Call Data form Function </Button>
        </div>
    )
}
export default Child2;