import Table from 'react-bootstrap/Table';
function NestedList(){
    let userList = [
        {name: 'Vimal', email: 'vimal@yahoo.com', address:[
            {HN:'33',city:'Noida',country:'india'},
            {HN:'30',city:'Ghazibad',country:'india'},
            {HN:'30',city:'Dehradun',country:'india'},
            {HN:'30',city:'Lucknow',country:'india'}
        ]
    },
        {
            name: 'Kamal', email: 'Kamal@gmail.com',  address:[
            {HN:'33',city:'Noida',country:'india'},
            {HN:'30',city:'Ghazibad',country:'india'},
            {HN:'40',city:'Dehradun',country:'india'},
            {HN:'20',city:'Lucknow',country:'india'}
        ]
    },
        {
            name: 'Rohit', email: 'rohit@outlook.com', address:[
            {HN:'99',city:'Noida',country:'india'},
            {HN:'45',city:'Ghazibad',country:'india'},
            {HN:'23',city:'Dehradun',country:'india'},
            {HN:'26',city:'Lucknow',country:'india'}
        ] 
    },
        {
            name: 'Rakesh', email: 'rakesh@yahoo.com', address:[
            {HN:'90',city:'Noida',country:'india'},
            {HN:'46',city:'Ghazibad',country:'india'},
            {HN:'57',city:'Dehradun',country:'india'},
            {HN:'43',city:'Lucknow',country:'india'}
        ]
    },
        {
            name: 'Ravi', email: 'ravi@gmail.com',  address:[
            {HN:'69',city:'Noida',country:'india'},
            {HN:'63',city:'Ghazibad',country:'india'},
            {HN:'65',city:'Dehradun',country:'india'},
            {HN:'87',city:'Lucknow',country:'india'}
        ]
    },
    ]
    return(
        <div>
            <h6>Nested List</h6>
            <Table striped bordered hover varient dard>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         userList.map((item, i)=>
                         <tr key={i}>
                             <td>{i+1}</td>
                             <td>{item.name}</td>
                             <td>{item.email}</td>
                             <td>

                                <Table>
                                    <tbody>
                                        {
                                            item.address.map((address)=>
                                          
                                            <tr>
                                                <td>House No.{address.HN}</td>
                                                <td>City:{address.city}</td>
                                                <td>Country:{address.country}</td>
                                            </tr>
                                              ) }
                                        </tbody>
                                    </Table>
                                       
                                     
                             </td>
                         </tr>
                         )

                    }
                   
                </tbody>
            </Table>
        </div>
    );
}

export default NestedList;