import React ,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import PreviousState from './PreviousState';
import PreviousProps from './PreviousProps';

function CreateNewUser (){
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
    let  [count,setCount]=useState('');
    function makeUser(){
        let data = [name, age, address]
        console.log('called', data)
    }
    return (
        <div>
            <div class="container">
            <div class="row">
                <div class='col-sm-4'> <h2>This is New user component</h2>
             <p><input type="text" onChange={(e)=>setName(e.target.value)} name='username' value={name}/></p>
             <p><input type="text" onChange={(e)=>setAge(e.target.value)}  name='age' value={age}/></p>
             <p><input type="text" onChange={(e)=>setAddress(e.target.value)}  name='address' value={address}/></p>
           <Button className="btn-btn-primary" onClick = {makeUser}>Create User</Button></div>
                <div class='col-sm-4'><PreviousState/></div>
                <div class='col-sm-4'><PreviousProps count={count}/><br></br> </div>
                </div>
            </div>
           
          
        </div>
    )
}




export default CreateNewUser;