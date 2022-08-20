import React, {useRef} from 'react';

const UseRef = ()=>{
    let inputRef = useRef (null);

    function handleInputdata ()
    {
        console.log('ksdjfksdf')
        inputRef.current.value="100"
        inputRef.current.focus();
    }
    return(
        <div>
            <h5>Use Ref in React</h5>
            <input type='text' ref={inputRef}/>
            <Button onClick={handleInputdata}></Button>
        </div>
    );
}



export default UseRef;