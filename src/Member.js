import React from 'react';
import Button from 'react-bootstrap/Button';
function Member(props){
   const data = {email:'vd@yahoo.com', name:'vd'}
    return(
        <div>
            <h6>Member </h6>
            <Button class="btn-btn-primary"  onClick={()=>props.alert(data)}>Click Me</Button>
        </div>
    )
}

export default Member;


