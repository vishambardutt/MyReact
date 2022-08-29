import PassFunctionPropsChild from "./PassFunctionPropsChild";

let PassFunctionAsProps = ()=>{

    function functionprops(){
     alert('Its function data as props')
    }
    return(
        <div>
            
            <PassFunctionPropsChild funndata={functionprops}/>
        </div>
    );
}

export default PassFunctionAsProps;