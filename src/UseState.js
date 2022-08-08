import React, {useState} from 'react';

function UseState() {
    const [data,setData] = useState('Hello I am rect State')

    function updateData(){
        setData('Hi react state changed')
    }
    return(
        <div>
            <h4>Use State in Functional Component</h4>
            <h5>{data}</h5>
        <button onClick={updateData}> Update Data </button>
        </div>
    );
}

export default UseState;