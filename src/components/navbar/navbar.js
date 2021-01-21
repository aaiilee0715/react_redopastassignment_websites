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


import { Navbar, Nav } from 'react-bootstrap';
import Images from '../images/photo-1544194215-541c2d3561a4.png';




import Business from '../business/buisness';
import Hamster from '../hamster/hamster';
import Puppy from '../puppy/puppy';
import Multi from '../multi/multi';








export default function NavBar() {
    return (
        <Router>

            <Navbar expand="d-flex justify-content-start">
                <h3 id="title">Websites</h3>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="collapse">
                    <Nav className="webpages">
                        <Nav.Link as={Link} to='/business'>Business Redevolopment Site</Nav.Link>
                        <Nav.Link as={Link} to='/hamster'>Hamster Hotel</Nav.Link>
                        <Nav.Link as={Link} to='/puppy'>Puppy Restaurant</Nav.Link>
                        <Nav.Link as={Link} to='/multi'>Multipage Website</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <section>
                <div className="hero">
                    <img src={Images} />
                    <h1 id="headline">Welcome</h1>
                </div>
            </section>

            <div className="slider"></div>
            <div id="root"></div>


            <Switch>
                <Route path="/business">
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


