import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
function PrintInput() {

    const [data, setData] = useState()
    const [print, setPrint] = useState(false)

    function getData(val) {
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    return (
        <div>
            <h4>Print  input data</h4>
            {
                print ?
                    <h4>{data}</h4> : null
            }
            <input type='text' onChange={getData} />
            <Button variant="primary" onClick={() => setPrint(true)}>Print Data</Button>
        </div>
    )
}
export default PrintInput;

