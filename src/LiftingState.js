import React from 'react';
import Member from "./Member";

function LiftingState(){
    
    function parentalert(data){

        alert('data');

    }

    return(
        <div>
          <h6>Lifting State Up</h6>
          <Member  alert={parentalert} />

        </div>
    )
}
export default LiftingState;


