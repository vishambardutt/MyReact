import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
// listing use in react
function Users() {
  const user = [
    { name: 'Vartika', age: 9, address: '345, Lane ed Street' },
    { name: 'Yutika', age: 11, address: 'Marin 33, ct Street' },
    { name: 'Sarita', age: 29, address: '33 UK cost sea' },
    { name: 'Kavita', age: 19, address: 'fort et, 99 ca' }

  ]

  return (
    // user of fragment
    <Fragment>

      <h1>Hello I am from Users</h1>
      {
        user.map((item, i) =>
          <div key={i}>{item.name}{item.age}{item.address}</div>

        )
      }
      {/* conditional */}
      {
        user.length === 4 ?
          <div>Yes Its right</div> : <div>No length should be 4</div>
      }
      <div calss="container"> <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((item, index) =>
              <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
              </tr>)
          }

        </tbody>
      </Table></div>

      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </Fragment>

  )
}
export default Users;