import React from 'react';
import Button from 'react-bootstrap/Button';
class Pc extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.log('check re-rendering')
        return (
            <div>
                <h5>Pure Component {this.state.count}</h5>
                <Button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</Button>
            </div >
        )
    }
}
export default Pc;