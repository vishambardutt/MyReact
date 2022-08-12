import React, { useContext } from 'react';
import { Globalcontext } from './GlobalContext';
import GlobalSuperChild from './GlobalSuperChild';

function GlobalChild() {
    const { Color } = useContext(Globalcontext)
   
    return (
        <div>
            <h6 style={{color:Color}}>Global Child</h6>
            <GlobalSuperChild/>
        </div>
    )
}

export default GlobalChild;