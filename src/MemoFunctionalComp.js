import React, { useState, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
function MemoFunctionComp() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiCountMemo = useMemo(function multiCount() {
        return count * 5
    },[count])

    return (
        <div>
            <h5>Use Memo Hook </h5>
            <h5>Count:{count}</h5>

            <h5><Button onClick={() => setCount(count + 1)}>Update Count</Button></h5>
            <h5>Item:{item}</h5>
            <h5><Button onClick={() => setItem(item * 10)}>Update Item</Button></h5>
            <h5>{multiCountMemo} </h5>
        </div>
    )
}

export default MemoFunctionComp;