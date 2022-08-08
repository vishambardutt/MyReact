import React from "react";
import Button from 'react-bootstrap/Button';
class About extends React.Component{
    
    constructor()
    {   
        super();
        this.state = {
            name: 'Vishambar',
            age: 45
        }
    }
    componentDidMount()
    {
       console.log("props",this.props.name)
       // console.log('did mount');
      // alert('name updated')
    }
    componentDidUpdate(){
        console.log('did update')
    }
    render(){
        console.log('render')
        return (<div>
            <h2>{this.props.name}</h2>
           
            <h4>About Class Component</h4>
            <h5>{this.state.name}</h5>
            <h5>{this.state.age}</h5>
            
            {/* <button onClick={()=>{this.setState({name:'Vartika'})}}>State Update</button> */}
            <Button variant="secondary" onClick={()=>{this.setState({name:'Vartika'})}}>STATE CHANGE</Button>{' '}
        </div>)
    }
}

export default About;