import React, { useContext } from 'react';
import { Globalcontext } from './GlobalContext';
function GlobalOtherChild() {
    const { Color } = useContext(Globalcontext)
   
    return (
        <div>
            <h6 style={{color:Color}}>Global Other Child</h6>
            
        </div>
    )
}

export default GlobalOtherChild;