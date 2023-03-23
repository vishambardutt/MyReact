import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import MemoFunctionalComp from './Hooks/MemoFunctionalComp';
import UserData from './UserData';
// import StateClassComponent from './StateClassComponent';
// import ChangePropsClassComp from './ChangePropsClassComp';
import Home from './Home';
import MemoFunctionComp from './Hooks/MemoFunctionalComp';
import UseEffect from './Hooks/UseEffect';
import UseStateh from './Hooks/UseStateh';
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
// import Hooks from './Hooks/Hooks';
import PureComponentinProps from './PureComponentinProps';
//  import PreviousProps from './PreviousProps';
// import PreviousState from './PreviousState';
// import CreateNewUser from './CreateNewUser';
import PreStateProps from './PreStateProps';
import PreState from './PreState';
import Api from './Api';
import Profile from './Profile';


function Header() {
  return (
   
      <div className="container">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link><Link className="nav-link" to='/'> Home</Link></Nav.Link>
                { <Nav.Link ><Link className="nav-link" to='/Profile'>Profile</Link></Nav.Link> }
                <Nav.Link><Link className="nav-link" to='/PureComponentinProps'> Pure Component</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='Hooks/MemoFunctionalComp'> Memo</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" to='/userdata'> API</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='/Childp'>Childp</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='lifeCycle/UseComponentDidUpdate'>Did Update</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='PreStateProps'>Previous Props</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='PreState'>Previous State</Link></Nav.Link>
                <Nav.Link ><Link className="nav-link" to='Api'>API fetch</Link></Nav.Link>
                {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown className="nav-link" title="Hooks" id="navbarScrollingDropdown">
              <NavDropdown.Item><Link className="nav-link" to='UseStateh'>useState Hook</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link><Link className="nav-link" to='UseEffect'>useEffect Hook</Link></Nav.Link> 
              </NavDropdown.Item>
              <NavDropdown.Item >
              useRef Hook
              </NavDropdown.Item>
              <NavDropdown.Item >
              useCallback Hook
              </NavDropdown.Item>
              
              <NavDropdown.Item  >
             <Nav.Link><Link className="nav-link" to='MemoFunctionComp'>useMemo Hook</Link></Nav.Link> 
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              useContext Hook
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              useReducer Hook
              </NavDropdown.Item>
              
            </NavDropdown>
                
              
               </Nav>
            </Container>
          </Navbar>
          <Routes>
            { <Route path="/Profile" element={<Profile />} /> }
            <Route path="/PureComponentinProps" element={<PureComponentinProps />} />
            <Route path="/Hooks/MemoFunctionalComp" element={<MemoFunctionalComp />} />
            <Route path="/UseStateh" element={<UseStateh />} /> 
            <Route path="/userdata" element={<UserData />} />
            <Route path="/childp" element={<Childp />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="Lifecycle/UseComponentDidUpdate" element= {<UseComponentDidUpdate />} />
            <Route path="PreStateProps" element= {<PreStateProps />} />
            <Route path="PreState" element= {<PreState />} />
            <Route path="Api" element= {<Api />} />
            <Route path="/MemoFunctionComp" element={<MemoFunctionComp />} />
            <Route path="/UseEffect" element={<UseEffect />} />
          
            <Route path="/" element={<Home />} />
          </Routes>
         </Router>
      </div>
   

  )
}

//

export default Header;

