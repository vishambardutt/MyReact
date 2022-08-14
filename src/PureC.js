import React, { PureComponent } from 'react';

class PureC extends PureComponent{
    // constructor()
    // {
    //     super();
    //     this.state ={
    //         count:1
    //     }
    // }

    render()
    {
        console.log('PureC render Check')
        return(
            <div>
                <h5>PureC Component {this.props.count}</h5>
            </div>
        );
    }
}


export default PureC;