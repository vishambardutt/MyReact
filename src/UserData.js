import React, { Fragment, useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
// listing use in react
function UserData() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees').then((data) => {
      data.json().then(result => {
        console.log('result', result);
        setUser(result.data);
      })
    })

  }, [])

  return (
    // user of fragment
    <Fragment>
      <h4>API EXAMPLE</h4>
      <div calss="container"> <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) =>
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.employee_name}</td>
              <td>{item.employee_salary}</td>
              <td>{item.employee_age}</td>
            </tr>

          )
          }
        </tbody>
      </Table></div>


    </Fragment>

  )
}
export default UserData;