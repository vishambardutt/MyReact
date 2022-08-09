import React from 'react';
import Button from 'react-bootstrap/Button';
function Child(props) {
    return (
        <div>
            <h5>This is child component</h5>
           <Button className="btn-btm-primary" onClick={props.data}>Call Data form Function</Button>
        </div>
    )
}
export default Child;