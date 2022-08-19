import React from 'react';
import Button from 'react-bootstrap/Button';
import StudentUnmount from '../StudentUnmount';
class ComponentWillUnmount extends React.Component {

    constructor()
    {
        super();
        this.state = {show:true}
    }
    
    render()
    {
        return(
            <div>
                <h5>Component Will Unmount</h5>
                {this.state.show ? <StudentUnmount/>:<h5>Child Student Removed</h5>}
                <Button onClick={()=>this.setState({show:!this.state.show})}>Remove child</Button>
            </div>
        );
    }
    }
 


export default ComponentWillUnmount;