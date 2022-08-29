import React,{useEffect,useState} from 'react';
let Api = ()=>{
    let [data,setData]= useState([]);

    useEffect (()=>{
        fetch("http://localhost:3000/Data/PeopleDetails.json").then ((result)=>{
            result.json().then((resp)=>{
                setData(resp)
                // /console.log("result",resp)
               
            })
        })

    },[])
    
   
    return(
        <div>
            <h5>API Call</h5>
        </div>

    );
}
export default Api;