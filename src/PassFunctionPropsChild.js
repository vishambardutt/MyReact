import Button from 'react-bootstrap/Button';
let PassFunctionPropsChild = (props)=>{
    return(
        <div>
            <h5>Pass Function as Props</h5>
            <Button onClick={props.funndata}>Call Function Props</Button>
        </div>
    );
    
    }
   


export default PassFunctionPropsChild;