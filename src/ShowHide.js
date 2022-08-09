import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function ShowHide(){
    const [btn, setBtn] = React.useState(true)
    return(
        <div>
            {
                btn? <h6>Hello I am show/Hide </h6>:null
            }
            
            {/* <button type="submit" variant="outline-primary" onClick={()=>setBtn(false)}>Hide</button>
            <button type="button" variant="outline-primary" onClick={()=>setBtn(true)}>Show</button> */}
            <Button type="button" variant="outline-primary" onClick={()=>setBtn(!btn)}>Toggle</Button>
            
        </div>
    )
}


export default ShowHide;



