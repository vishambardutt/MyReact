import React, { useContext } from 'react';
import { Globalcontext } from './GlobalContext';

function GlobalSuperChild() {
    const { Color } = useContext(Globalcontext)
   
    return (
        <div>
            <h6 style={{color:Color}}>Global Super Child</h6>
        </div>
    )
}

export default GlobalSuperChild;