import React from 'react';
import Button from 'react-bootstrap/Button';
class ShouldCompoentUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
shouldComponentUpdate()
{
    console.log('ShouldComponentUpdate',this.state.count);
    if (this.state.count>3 && this.state.count<10)
    return true;
}
render()
{
    return(<div>
        <h5>Should Component Update{this.state.count}</h5>
        <Button onClick={()=>{this.setState({count:this.state.count +1})}}>Update Counter</Button>
    </div>)
    
}
}
export default ShouldCompoentUpdate;
