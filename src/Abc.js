import React from 'react';

import Button from 'react-bootstrap/Button';

class Abc extends React.Componnent{
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
        this.state = {
            name:'Jakhmola',
            email: 'vJ@gmail.com'
        }
    }
    render()
    {
        return(
            <div>
                <h6>Hello {this.state.name}</h6>
                <h6>Hello {this.state.email}</h6>
                <Button onClick={()=>{this.updateState()}}></Button>
            </div>
        );
    }
}

export default Abc;