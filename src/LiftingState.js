import React from 'react';
import Member from "./Member";
function LiftingState(data) {

    // let data = 'Vartika Jakhmola'
       
    function Parent(){
        alert('data')
    }
    return (
        <div>
            <h6>Lifting State Up</h6>
            {/* <Member name={data}/> */}
            <Member alert={Parent}/>

        </div>
    );
}
export default LiftingState;


