import React from 'react';
import Member from "./Member";
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


