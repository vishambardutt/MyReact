import React from 'react';
function Child(props) {
    return (
        <div>
            <h5>This is child component</h5>
            <button variant='primary' onClick={props.data}>Call Data form Function</button>
        </div>
    )
}
export default Child;