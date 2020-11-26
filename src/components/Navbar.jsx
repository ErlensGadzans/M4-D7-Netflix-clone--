import React from "react"
import "./NavBar.css"
import logo from '../data/logo.png';
import profilepic from '../data/profile_picture.png';
import {FormControl, Navbar, Button, Form, Nav, Container} from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"


const NavBar = (props) => {
  console.log(props)
    return (
    <Navbar className="navBar py-0 m-0 px-1">
      <Link to="/">
        <Navbar.Brand className="navLink"> <img style={{height: "65px"}} src={logo}/>
          </Navbar.Brand>
          </Link>
        <Nav className="mr-auto">
        <Nav.Link className="navLink" href="#tvShows">Tv Shows</Nav.Link>
          <Link to="/onlymovies">
          <div className="nav-link" to="/onlymovies" style={{ color: "white" }}> Only Movies </div>
          </Link>
          <Nav.Link className="navLink" href="#recentlyAdded">Recently Added</Nav.Link>
          <Nav.Link className="navLink" href="#myList">My List</Nav.Link>
          <Link to="/register">
          <div className={props.location.pathname === "/register" ? "nav-link" : ""} >  <Button variant="danger">Register</Button>{''}  </div>
          </Link>
        </Nav>
        <Form inline>
         
        </Form>
        <Navbar.Brand> <img style={{height: "30px"}} src={profilepic} className="ml-2"/>
          </Navbar.Brand>
      </Navbar>
      )
    }
    
    export default withRouter(NavBar);

