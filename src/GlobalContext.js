import React, { createContext, useState } from 'react';
import GlobalChild from './GlobalChild';
import GlobalOtherChild from './GlobalSecondChild';

export const Globalcontext = createContext();

function GlobalContext() {

    const [color, setColor] = useState('red')
    const [name, setName] = useState('Jakhmola')
    const getName =(item)=>{
        setName(item)
        console.log(item);
    }

    return (
        <Globalcontext.Provider value= {{Color: color, getName:getName}} >
        <div>
        <h6>Global Context {name}</h6>
        </div>
        <GlobalChild/>
        <GlobalOtherChild/>
        </Globalcontext.Provider >
    )
}


export default GlobalContext;