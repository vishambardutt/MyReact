import { BrowserRouter as Router, Route, Link, Routes,} from 'react-router-dom';

let DynamicRouting =()=>{
    let students = [
        {id:1, name:'Kapil',email:'kapil@yahoo.com'},
        {id:1, name:'Kavita',email:'Kavita@yahoo.com'},
        {id:1, name:'Rohit',email:'rohit@yahoo.com'},
        {id:1, name:'Amit',email:'amit@gmail.com'},
        {id:1, name:'Rohan',email:'rohan@test.com'},
    ]
    return(
        <div>
          <Router>
          <h5>Dynamic Routing</h5>
            
            {
               students.map((Item)=>
               <div><Link to={"/Purec/ + item.id"}>{Item.name}</Link></div>
               
               )
            }
          </Router>
           
          
           
            
        </div>
    );
}
export default DynamicRouting;