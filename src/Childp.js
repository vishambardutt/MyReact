import React from 'react';
import Button from 'react-bootstrap/Button';
import LfChild from "./LfChild";

function Childp(){
    const [name, setName] = React.useState('Say Hi')

    return(
        <div>
            <h5>Render Method in React</h5>
           <h5> <LfChild name={name}/></h5>
           <h5> <button class="btn-btn-primary" onClick={()=>setName('Say Hello')}>Update Name</button></h5>
        </div>
    );
}

export default Childp;