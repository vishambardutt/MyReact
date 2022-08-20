import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import ForwardRefChild from './ForwardRefChild';

let ForwardRef = () => {
    const formRef = useRef(null)
    let updateForm = () => {
        formRef.current.value = "200"
        formRef.current.focus()
    }
    return (
        <div >
            <h6>Forward Ref Example</h6>
            <ForwardRefChild ref={formRef} />
            <Button onClick={updateForm}>Update Input</Button>
        </div>
    );
}

export default ForwardRef;