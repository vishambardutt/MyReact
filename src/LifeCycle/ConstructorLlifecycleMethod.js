import React from 'react';
class ConstructorLifecycleMethod extends React.Component {

    constructor() {

        super();
       this.state = {
        data:'Jakhmola'

        }
    }
    render() {
        return (
            <div>
                <h6>Constructor Life Cycle Method{this.state.data}</h6>
            </div>
        );
    }
}


export default ConstructorLifecycleMethod;