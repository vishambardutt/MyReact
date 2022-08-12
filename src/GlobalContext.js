import React, { createContext, useState } from 'react';
import GlobalChild from './GlobalChild';

export const Globalcontext = createContext();

function GlobalContext() {

    const [color, setColor] = useState('red')

    return (
        <Globalcontext.Provider value= {{Color: color}} >
        <div>
        <h6>Global Context</h6>
        </div>
        <GlobalChild/>
        </Globalcontext.Provider >
    )
}


export default GlobalContext;