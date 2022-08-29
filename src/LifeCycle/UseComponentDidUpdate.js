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
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <h6>Use Component Did Update</h6>
                            <Button onClick={() => this.setState({ City: 'Delhi' })}>did update</Button>
                        </div>
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4'></div>
                    </div>
                    
                </div>

            </div>

        );
    }
}
export default UseComponentDidUpdate;
