import React, { createContext, useState } from 'react';
import GlobalChild from './GlobalChild';
import GlobalOtherChild from './GlobalSecondChild';

export const Globalcontext = createContext();

function GlobalContext() {

    const [color, setColor] = useState('red')

    return (
        <Globalcontext.Provider value= {{Color: color}} >
        <div>
        <h6>Global Context</h6>
        </div>
        <GlobalChild/>
        <GlobalOtherChild/>
        </Globalcontext.Provider >
    )
}


export default GlobalContext;