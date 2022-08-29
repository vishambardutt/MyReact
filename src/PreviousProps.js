import React, {useEffect,useRef} from 'react';
let PreviousProps = (props)=>{
    let lastVal =  useRef();
    useEffect(()=>{
        lastVal.current = props.count
    })

    let preProps = lastVal.current

    return(
        <div>
        <h5>Current Value{props.count}</h5>
        <h5>Previous Value{preProps}</h5>
        <h5>Dif{props.count-preProps}</h5>
           
    </div>
    );
    
}

export default PreviousProps;
