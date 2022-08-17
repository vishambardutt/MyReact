import React from 'react';
import Button from 'react-bootstrap/Button';
function AccDataFunction(props){
    return(
        <div>
            <h6>Call function data form Other Component</h6>
            <Button onClick={()=>props.data()}>CALL DATA</Button>
        </div>
    );
}

export default AccDataFunction;