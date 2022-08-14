import React from 'react';
import Button from 'react-bootstrap/Button';
class ChildStudent extends React.Component{
    render(){
        return(
            <div>
                <h6>Child Student Will Unmount</h6>
                <Button>Toggle Child Student</Button>
            </div>
        )
    }
}
export default ChildStudent;