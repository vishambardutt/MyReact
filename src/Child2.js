
import React from 'react';

function Child2(props) {
    return (
        <div>
            <h5>This is child component</h5>
            <button variant='primary' onClick={props.data}>Call Data form Function </button>
        </div>
    )
}
export default Child2;