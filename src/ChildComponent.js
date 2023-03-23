import React from 'react';

function ChildComponent(props){
    
    return(
        <div><button onClick={()=>props.messageHandler('child')}>Message Parent</button></div>
    )
}


export default ChildComponent;