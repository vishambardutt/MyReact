import React from 'react';

function ReuseData(props){

    return (
        <div>
           
            <h6>Reuse Data{props.data.Name} {props.data.Email} {props.data.contact}</h6>
        </div>
    )
}


export default ReuseData;