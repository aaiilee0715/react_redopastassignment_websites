import React from 'react';
//Need to install 'npm install react-router-dom' for router to work in terminal
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import { Button, Form, Navbar, Nav, FormControl } from 'react-bootstrap';



import Business from '../business/buisness';
import Hamster from '../hamster/hamster';
import Puppy from '../puppy/puppy';
import Multi from '../multi/multi';


export default function NavBar(){
    return (
        <Router>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to='/business'> Business Redevolopment Site </Nav.Link>
              <Nav.Link as={Link} to='/hamster'> Hamster Hotel </Nav.Link>
              <Nav.Link as={Link} to='/puppy'> Puppy Restaurant </Nav.Link>
              <Nav.Link as={Link} to='/multi'> Multipage Website </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <hr />
  
        <Switch>
          <Route path="/business">
              {/* <RenderList /> */}
            <Business />
          </Route>
          <Route path="/hamster">
            <Hamster />
          </Route>
          <Route path="/puppy">
            <Puppy />
          </Route>
          <Route path="/multi">
            <Multi />
          </Route>
        </Switch>
      
      </Router>
    )
}
// function RenderList() {
//     return (
//       <Business />
    
//     );
//   }
