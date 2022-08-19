import React from 'react';
import Button from 'react-bootstrap/Button';
class UseComponentDidMount extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'React example Component Did Mount'
        }
    }
    componentDidMount() {
        console.log('Component Did Mount')
    }
    render() {
        console.log('render')
        return (
            <div>
                <h5>{this.state.name}</h5>
                <h6><Button onClick={()=>this.setState({name:'React component did mount'})}>Update</Button></h6>
            </div >
        );
    }

}

export default UseComponentDidMount;