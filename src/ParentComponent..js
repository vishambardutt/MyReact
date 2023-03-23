import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component{
    constructor(){
        super()
        this.state ={
            parentName:'Parent'
        }
        this.messageParent = this.messageParent.bind(this)
    
    }
      messageParent(childName){
        alert(`Hi ${this.state.parentName} from ${childName}`)
      }
    
    render(){
        return(
            <div>
<ChildComponent messageHandler ={this.messageParent}/>
            </div>
        )
    }
 }
 export default ParentComponent;