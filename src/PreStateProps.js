import PreviousProps from './PreviousProps';
import Button from 'react-bootstrap/Button';
import React,{useState} from 'react';
let PreStateProps = ()=>{
    let [count, setCount] = useState(0);
    return(
        <div>
            <h5> <PreviousProps count ={count}/></h5>
           
            <h6><Button onClick={()=>setCount(Math.floor (Math.random()*10))}>UPDATE COUNTER</Button></h6>
        </div>
    );
}
export default PreStateProps;