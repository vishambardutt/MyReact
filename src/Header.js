// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import MemoFunctionalComp from './Hooks/MemoFunctionalComp';
import UserData from './UserData';
// import StateClassComponent from './StateClassComponent';
// import ChangePropsClassComp from './ChangePropsClassComp';
import Home from './Home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link, Routes,} from 'react-router-dom';
import './App.css';
// import PrintInput from './PrintInput';
import Childp from './Childp';
// import Welcome from './Welcome';
// import LiftingState from './LiftingState';
import PageNotFound from './PageNotFound';
// import UseComponentDidMount from './UseComponentDidMount';
import UseComponentDidUpdate from './LifeCycle/UseComponentDidUpdate';
import Hooks from './Hooks/Hooks';
import PureComponentinProps from './PureComponentinProps';
//  import PreviousProps from './PreviousProps';
// import PreviousState from './PreviousState';
import CreateNewUser from './CreateNewUser';
import PreStateProps from './PreStateProps';
import PreState from './PreState';


function Header() {
  return (
   
      <div class="container">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link><Link className="nav-link" to='/'> Home</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='Hooks/Hooks'>Hooks</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" to='/PureComponentinProps'> Pure Component</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='Hooks/MemoFunctionalComp'> Memo</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" to='/userdata'> API</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='/Childp'>Childp</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='lifeCycle/UseComponentDidUpdate'>Did Update</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='PreStateProps'>Previous Props</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='PreState'>Previous State</Link></Nav.Link>
                
              
               </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/Hooks/Hooks" element={<Hooks />} />
            <Route path="/PureComponentinProps" element={<PureComponentinProps />} />
            <Route path="/Hooks/MemoFunctionalComp" element={<MemoFunctionalComp />} />
            <Route path="/userdata" element={<UserData />} />
            <Route path="/childp" element={<Childp />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="Lifecycle/UseComponentDidUpdate" element= {<UseComponentDidUpdate />} />
            <Route path="PreStateProps" element= {<PreStateProps />} />
            <Route path="PreState" element= {<PreState />} />
            
            <Route path="/" element={<Home />} />
          </Routes>
         </Router>
      </div>
   

  )
}

//

export default Header;

