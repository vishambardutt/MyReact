import React from 'react';
class LifeCycle extends React.Component {
    constructor()
    {
        super();
        this.state={Hello:'My Name is Vishambar Or I am intrested in React'}
    }
    render() {
        return(
            <div>
                <h4>React Life Cycle Method</h4>
                <h5><button class="btn-btn-primary">Load Product</button></h5>
                <h5><button class="btn-btn-primary">Update Product</button></h5>
                <h5><button class="btn-btn-primary">Remove Product</button></h5>
            </div >   
    )
    }
   
}




export default LifeCycle;