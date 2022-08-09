import React from 'react';
import Button from 'react-bootstrap/Button';
class LifeCycle extends React.Component {
    constructor()
    {
        super();
        this.state={Hello:'My Name is Vishambar Or I am intrested in React'}
    }
    render() {
        return(
            <div>
                <h5>React Life Cycle Method</h5>
                <h5><Button variant='primary'>Load Product</Button></h5>
                <h5><Button variant='primary'>Update Product</Button></h5>
                <h5><Button variant='primary'>Remove Product</Button></h5>
            </div >   
    )
    }
   
}




export default LifeCycle;