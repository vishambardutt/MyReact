import React,{useEffect, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';

function Contact (props)
{

    const [name,setName] = useState ('Yutika');
    const [age,setAge] = useState (9);
    const [val,setVal] = useState ('Raman')

  useEffect(()=>{
 
   console.log('check props', props.name)
  })

  useEffect(()=>{
 
    console.log('check props2', props.name)
   },[props.name])
   const vish = (e)=>{
    console.log('vish function',e.target.value)
    setVal(e.target.value)
   }
    let data = "Contact us Component"
    return (
        <div><h4>Contact us  Component</h4>
        <h4><input type='text'value={val} onChange = {vish}/> <Button variant="danger" type='text'value={val} onChange = {vish}>Click Me</Button></h4>
       
     
       <Button variant="dark" onClick={()=>alert(val)}>CLICK ME</Button>
        
       <h4>{data}</h4> 
        
        {props.name}
         <h4>Name:{ name}</h4>
         <h4>Age:{ age}</h4> 
      
        <Button variant="info" onClick={()=>setName('Vartika Jakhmola')}>UPDATE STATE</Button>{' '}
         {/* Events */}
        
         <Button variant="warning" onClick={()=>setAge(10)}>UPDATE AGE</Button>{' '}
        </div>
    )

}



export default Contact;
