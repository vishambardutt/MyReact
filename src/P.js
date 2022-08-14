import React from 'react'
import Child from './Child';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './App.css';
import FunctionPure from './functionPure';
 function Parent() {
  const [data, setData] = useState('');
  
  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  }
  return (
    <div >
     
      <Child parentToChild={data}/>
      <Button primary onClick={() => parentToChild()}>Click Parent</Button>
      
    </div>
  )
}
export default Parent;