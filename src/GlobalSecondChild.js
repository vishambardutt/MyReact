import React, { useContext } from 'react';
import { Globalcontext } from './GlobalContext';
function GlobalSecondChild() {
    const { Color } = useContext(Globalcontext)
   
    return (
        <div>
            <h6 style={{color:Color}}>Global Second Child</h6>
            
        </div>
    )
}

export default GlobalSecondChild;