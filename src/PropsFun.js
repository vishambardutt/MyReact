import React from 'react';

function PropsFun(props) {
    return (
        <div>
            <h4>Props in Function Component</h4>
            
            <h6>Name11:{props.name}</h6>
            <h6>Email:{props.email}</h6>
            <h6>Address:{props.address}</h6>
        </div>
    )
}
export default PropsFun;