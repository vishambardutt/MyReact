import React,{useRef} from 'react';

function UseRefComponent(){
    const functRef = useRef(null)
    return(

        <div>
            <h5>Use Ref  Function Component</h5>
            <h5><input type="text" ref={functRef}/></h5>
            <h5><Button onClick={()=>{}}> Handle Ref</Button></h5>
        </div>
    );

}



export default UseRefComponent;