import React from 'react';
import Member from "./Member";
import PropsFun from './PropsFun';

function LiftingState() {

    function liftalert(data) {
        // console.log(data)
        // alert('data.name');
        
     }
       

    return (
        <div>
            <h6>Lifting State Up</h6>
            <Member alert = {liftalert} />

        </div>
    )
}
export default LiftingState;


