import React from 'react';
import Button from 'react-bootstrap/Button';
class LfChid extends React.Component{
    constructor(){
        super();
        this.state ={email:'ravi@yahoo.com'}
        
    }

    render()
    {
        console.log('render Method', this.state.email)
        return(
            <div>
            <h5>Lf child Component</h5>
            <h5>{this.props.name}</h5>
            <Button className="btn-btn-primary" onClick={()=>this.setState({email:'Kavita@yahoo.com'})}>Change state</Button>
            </div>
        )

    }
   
}


export default LfChid;