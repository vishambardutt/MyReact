import React ,{useState} from 'react';

import button from 'react-bootstrap/Button';

function CreateNewUser (){
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');

    function makeUser(){
        let data = [name, age, address]
        console.log('called', data)
    }
    return (
        <div>
            <h2>This is New user component</h2>
             <p><input type="text" onChange={(e)=>setName(e.target.value)} name='username' value={name}/></p>
             <p><input type="text" onChange={(e)=>setAge(e.target.value)}  name='age' value={age}/></p>
             <p><input type="text" onChange={(e)=>setAddress(e.target.value)}  name='address' value={address}/></p>
           <button onClick = {makeUser}>Create User</button>
        </div>
    )
}




export default CreateNewUser;