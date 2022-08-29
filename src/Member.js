import React from 'react';
import Button from 'react-bootstrap/Button';

function Member(props){
   const data = 'Yutika Jakhmola'
    return(
        
       
        <div>
            
            {/* <h6>Member Name: {props.name}</h6>  */}
            {/* <h6><Button class="btn-btn-primary"onClick={props.alert}>Lifting state</Button></h6>  */}
            <h6><Button className="btn-btn-primary"onClick={()=>props.alert(data)}>Lifting state</Button></h6> 
        </div>
       
    )
}

export default Member;


