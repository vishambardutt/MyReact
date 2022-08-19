import React from 'react';
import Button from 'react-bootstrap/Button';
class UseComponentDidUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            City: 'Banglore'
            
        }
        
    }
    
    componentDidUpdate() {
        console.log('Use component did Update')
    }
    render() {
        console.log('render use componentupdate ')
        return (
            <div>
                <h6>Use Component Did Update</h6>
                <Button onClick={()=>this.setState({City:'Delhi'})}>did update</Button>
            </div>
        );
    }
}
export default UseComponentDidUpdate;
