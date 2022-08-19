import React,{useEffect,useState} from 'react';
import UseEffect from './UseEffect';
import UseStateh from './UseStateh';

const Hooks = ()=> {
    const [count, setCount] = useState(5);
  const [name, setName] = useState(10);

  useEffect(() => {
    // Update the document title using the browser API
    console.log('Use effect Count called')
  },[count]);

//   useEffect(() => {
    // Update the document title using the browser API
    // console.log('Use effect name called')
//   },[name]);
    return(
        <div  class="container">
             <div class="row"><h4> Hooks in React</h4></div>
             <div class="row">
                <div class="col-sm-4"><UseEffect /></div>
                <div class="col-sm-4"><UseStateh/></div>
               
                
            </div>
           
      
        
        </div>
    );
}


export default Hooks;