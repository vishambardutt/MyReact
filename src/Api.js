import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
let Api = ()=> {
let [data, setData] = useState([])
useEffect (()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
//    fetch('http://localhost:3000/userdata')
    .then((result)=>{
        result.json().then((response)=>{
            console.log('result',response)
            setData(response)
        })
    })


},[])
// useEffect(() => {
//      fetch('https://dummy.restapiexample.com/api/v1/employees').then((result) => {
//     //  fetch('http://localhost:3000/userdata').then((result) => { 
//       result.json().then(response => {
//         console.log('result', response);
//         setData(response);
//       })
//     })

//   },[])
console.log('result');
return (
    <div className="container">
        <div className="row"><label>Post Method</label>
            <div className='col-sm-4'>
                <p><input type="text" name="name"/></p>
                <p><input type="text" name="email"/></p>
                <p><input type="text" name="address"/></p>
                <p><input type="text" name="name"/></p>
                </div>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'></div>
        </div>
        <h5>API Call</h5>

        <Table >
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Email</th><th>Address</th>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Table>
                                    <tr>
                                        <td>Street:</td> <td>City:</td> <td>Zipcode:</td>
                                    </tr>
                                    <tr>
                                        <td>{item.address.street}</td> <td>{item.address.city}</td> <td>{item.address.zipcode}</td>
                                    </tr>
                                </Table>
                            </td>
                        </tr>
                    )
                }
            </thead>
        </Table>
    </div>

);

}
export default Api;
