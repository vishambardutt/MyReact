import React, {useRef} from 'react';
import {Form, Button,  } from "react-bootstrap";

function UnControlledComponent() {
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    function submitForm(event){
        event.preventDefault()
        console.log("input filed 1 value: ", inputRef.current.value)
        console.log("input filed 2 value: ", inputRef2.current.value)
        }
    return (
        <div>
            <h5>Un Controlled PureComponent</h5>
            <Form onSubmit={submitForm}>
                <h5><input ref={inputRef} type='text'  /></h5>
                <h5><input ref={inputRef2} type='text' /></h5>
                <h5><Button>SUBMIT</Button></h5>
            </Form>

        </div>
    )
}
export default UnControlledComponent;