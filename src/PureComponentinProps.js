import React,{PureComponent}  from 'react';
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
        //  console.log('Pure Component')
        return (
            <div class="container">
                <div class='row'>
                    <div class="col-sm-4">
                        <h5><PureC count={this.state.count} /></h5>
                        <h5><Button class="btn-btn-danger" onClick={() => this.setState({ count: this.state.count +1 })} > Update Count</Button></h5></div>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4"></div>
                </div>


            </div>

        );

    }
}
export default PureComponentinProps;