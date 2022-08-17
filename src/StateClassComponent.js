import React from 'react';
import Button from 'react-bootstrap/Button';

class StateClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {data: 'React Class component  UesState', number: 1 }
    }
    upclass() {
        this.setState({ data: 'Class Component state Changed' })
    }
    number() {
        this.setState({ number: this.state.number + 1 })
    }
    render() {
        return (
            <div>
                <h4>Example of State in Class Component</h4>
                <h4>{this.state.data}</h4>
                <h4>{this.state.number}</h4>
                <h4> <Button variant="warning" onClick={() => this.upclass()}>UPDATE DATA</Button></h4>
               
               <h4><Button variant="warning" onClick={() => this.number()}>INCRESE DATA</Button></h4>
                
            </div>
        )
    }

}

export default StateClassComponent;