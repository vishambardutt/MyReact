import React from 'react';
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
            <button onClick={()=>this.setState({email:'Kavita@yahoo.com'})}>Change state</button>
            </div>
        )

    }
   
}


export default LfChid;