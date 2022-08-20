import React,{PureComponent} from 'react';

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
        //  console.log('Pure Component render Check')
        return(
            <div>
                <h5>Pure  Component11 </h5>
                <h5>Count: {this.props.count}</h5>
            </div>
        );
    }
}


export default PureC;