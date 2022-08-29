import React from 'react';
import Button from 'react-bootstrap/Button';
class ChangePropsClassComp extends React.Component {
    constructor() {
        super();
        this.state = { msg: 'Hi, There!' }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick() {

        // Changing state
        this.setState({ msg: 'Welcome to the React world!' })
    }
    render() {
        return (
            <div>
                <h5>Change state in Class Component</h5>
                <h6>{this.state.msg}</h6>
                <h6> <Button className="btn-btn-primary" onClick={this.handleClick}>Change Props</Button></h6>
            </div>
        )
    }

}
export default ChangePropsClassComp;