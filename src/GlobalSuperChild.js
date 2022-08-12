import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { Globalcontext } from './GlobalContext';

function GlobalSuperChild() {
    const { Color,getName } = useContext(Globalcontext)
    const Name = 'Vishambar'
   
    return (
        <div>
            <h6 style={{color:Color}}>Global Super Child</h6>
            <Button onClick={()=>getName(Name)}>Click Me</Button>
        </div>
    )
}

export default GlobalSuperChild;