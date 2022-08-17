import React from 'react';
import Button from 'react-bootstrap/Button'
class ChangeState extends React.Component{
    constructor()
    {
        super();
        this.state = {
            name: 'Vishambar',
            email: 'vd@yahoo.com'
        }
    }
    updateState()
    {
        this.setState ({
            name:'Jakhmola',
            email: 'vJ@gmail.com'
        })
    }
   
    render()
    {
        return(
            <div>
                <h6>Hello {this.state.name}</h6>
                <h6>Hello {this.state.email}</h6>
                <Button onClick={()=>this.updateState()}>Change State</Button>
                
            </div>
        );
    }
}

export default ChangeState;