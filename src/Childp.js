import React from 'react';
import Button from 'react-bootstrap/Button';
import LfChild from "./LfChild";
import PassFunctionAsProps from './PassFunctionAsProps';


function Childp(){
    const [name, setName] = React.useState('Say Hi')

    return(
        <div class="container">
            <h5>Render Method in React</h5>
           <h5> <LfChild name={name}/></h5>
           <h5> <Button variant='primary' onClick={()=>setName('Say Hello')}>Update Name</Button></h5>
           <div class="row">
            <div class="col-sm-4"><PassFunctionAsProps/></div> <div class="col-sm-4"></div> <div class="col-sm-4"></div>
           </div>
        </div>
    );
}

export default Childp;