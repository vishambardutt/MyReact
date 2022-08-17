import React, { useState } from 'react';

function ConditionalRendering() {
    let [logIn, setlogIn] = useState(1)
    // incase of multiple users
    // let [logIn, setlogIn] = useState(false)

    return (
        <div>
            <h5>Conditional Redering/Ternary Operator</h5>
            {logIn ?<h6>Welcome Vishambar </h6>:<h6>Welcome Guest</h6>}

            {
            logIn ==1?<h6>Welcome User 1</h6>
            :logIn ==2?<h6>Welcome User 2 </h6>
            :<h6>Welcome User 3 </h6>
        }

        </div>
    );
}

export default ConditionalRendering;