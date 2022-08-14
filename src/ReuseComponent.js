import React from 'react';
import ReuseData from './ReuseData';

function ReuseComponent(){
    const users =[
        {Name: 'Anil Kumar', Email: 'anil@yahoo.com', contact: 9876567898},
        {Name: 'Arun Mishar', Email: 'arunm@gmail.com', contact:998765456},
        {Name: 'Ravi Narang', Email: 'ravir@outlook.com', contact:9098767898},
        {Name: 'Kalpna Gyagi', Email: 'kalpinat@blog.com', contact:9999998765}
    ]

    return(
        <div>
            <h5>Reuse Component</h5>
            
           {
                users.map((item,i)=>
                <ReuseData data={item}/> 
                )
            }
        </div>
        
    );
}
export default ReuseComponent;