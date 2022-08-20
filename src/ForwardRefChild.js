import React, { forwardRef } from 'react';

let ForwardRefChild = (props, Fref) => {
    return (
        <div>
            <h6>Forward Ref Child</h6>
            <h6><input type="text" ref={Fref} /></h6>
        </div>
    );
}
export default forwardRef(ForwardRefChild);