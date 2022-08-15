import React, { useState } from 'react';
const ControlledComponent = () => {
    // const [val,setValue] = useState('222')
    const [val, setValue] = useState('')
    const [item, setItem] = useState('')
    return (
        <div>
            <h5>Controlled Component</h5>
            {/* can use default value */}
            <h5><input type="text" defaultValue="111" onChange={(e) => setValue(e.target.value)} /></h5>
            <h5><input type="text" value={val} onChange={(e) => setValue(e.target.value)} /></h5>
            <h5><input type="text" value={item} onChange={(e) => setItem(e.target.value)} /></h5>
            <h5>Value:{val}</h5>
            <h5>Item:{item}</h5>
        </div>
    );
}


export default ControlledComponent;