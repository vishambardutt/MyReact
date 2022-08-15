import React, {createRef} from 'react';
import Button from 'react-bootstrap/Button';

class RefComponent extends React.Component{
    constructor()
    {
        super();
        this.forRef =createRef()
    }
    componentDidMount()
    {
        // console.log(this.forRef.current.value='1000')
    }
    getVal()
    {
        console.log(this.forRef.current.value)
        this.forRef.current.style.color="red"
    }
    render()
    {
        return(
            <div>
                <h5> Ref Component</h5>
                <h5><input type='text' ref = {this.forRef}/></h5>
                <h5><Button onClick={()=>this.getVal()}>Get Ref</Button></h5>
              </div>
        );
    }
 }


export default RefComponent;