import React from 'react';
import Button from 'react-bootstrap/Button';
class RenderMethod extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'vdj@gmail.com'
        }
    }
    render() {
        console.log('Render Method', this.state.email)
        return (
            <div>
                <h5>Render Method</h5>
                <Button className="btn btn-danger" onClick={() => this.setState({ email: 'vd@test.com' })}>Update Email</Button>

            </div>

        );
    }
}

export default RenderMethod;