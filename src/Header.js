import React from 'react';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import UserData from './UserData';
import UseState from './UseState';
import StateClassComponent from './StateClassComponent';
import ChangePropsClassComp from './ChangePropsClassComp';
import Home from './Home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link, Routes, } from 'react-router-dom';
import './App.css';
import PrintInput from './PrintInput';
import Childp from './Childp';
import Welcome from './Welcome';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div>
      <div class="container">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home"><Link class="nav-link" to='/'> Home</Link></Nav.Link>
                <Nav.Link href="#features"><Link class="nav-link" to='/about'> About</Link></Nav.Link>
                <Nav.Link href="#pricing"><Link class="nav-link" to='/contact'> Contact</Link></Nav.Link>
                <Nav.Link href="#pricing" ><Link class="nav-link" to='/users'> User</Link></Nav.Link>
                <Nav.Link href="#pricing" ><Link class="nav-link" to='/userdata'> API Call</Link></Nav.Link>
                <Nav.Link href="#pricing" ><Link class="nav-link" to='/usestate'>State in Function</Link></Nav.Link>
                <Nav.Link href="#pricing" ><Link class="nav-link" to='/stateclasscomponent'>State </Link></Nav.Link>
                <Nav.Link href="#pricing" ><Link class="nav-link" to='/ChangePropsClassComp'>Props Change Class</Link></Nav.Link>
                <Nav.Link href="#pricing" ><Link class="nav-link" to='/PrintInput'>Print Input</Link></Nav.Link>
                <Nav.Link href="#pricing" ><Link class="nav-link" to='/Childp'>Childp</Link></Nav.Link>
                <Nav.Link href="#pricing" ><Link class="nav-link" to='/Welcome'>Welcome</Link></Nav.Link>
                            
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/userdata" element={<UserData />} />
            <Route path="/usestate" element={<UseState />} />
            <Route path="/stateclasscomponent" element={<StateClassComponent />} />
            <Route path="/changepropsclasscomp" element={<ChangePropsClassComp />} />
            <Route path="/printinput" element={<PrintInput />} />
            <Route path="/childp" element={<Childp />} />
            <Route path="/welcome" element={<Welcome />} />
            
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>

  )
}

export default Header;

