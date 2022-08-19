import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import PureC from './PureC';

class PureComponentinProps extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }

    }
    render() {
        console.log('Pure Component')
        return (
            <div>
                <h5><PureC count={this.state.count} /></h5>
                <h5><Button onClick={() => this.setState({ count: this.state.count + 1 })} > Update Count</Button></h5>
            </div >
        );

    }
}
export default PureComponentinProps;