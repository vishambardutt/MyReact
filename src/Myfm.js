import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

function Myfm(){
    const [name,setName]= useState('')
    const [tnc,setTnc]= useState('false')
    const [hobbies, setHobbies] =useState('')
    function getFormData(e){
        console.log(name,tnc,hobbies)
        e.preventDefault()
    }
    return(
           <div class="row">
                <div class="col-sm-12"><h6>Form Handling</h6></div>
                <form onSubmit={getFormData}>
                    <div class="col-sm-12"><input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)}/></div>
                    <div class="col-sm-12">
                        <select onChange={(e)=>setHobbies(e.target.value)}>
                        <option>-Select-</option>
                        <option>Milk</option>
                        <option>Paneer</option>
                        <option>Curd</option>
                        </select>
                    </div>
                    <div class="col-sm-12"><h6><input type='CheckBox' onChange={(e)=>setTnc(e.target.checked)}/> <span> Terms & Condition</span></h6></div>
                    <div class="col-sm-12"><Button className="btn-btn-primary" type="Submit" variant='danger'>Submit</Button></div>
                </form>
            </div>
            )
        }
        export default Myfm;