import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, NavLink, Dropdown, NavItem, Menu, Item, Divider } from 'react-bootstrap'

export default function Navigation() {
  return (
  // <nav>
  //   <ul>
  //     <li> <NavLink exact activeClassName="current" to='/Home'> Home </NavLink></li>
  //     <li> <NavLink exact activeClassName="current" to='/Profile'> Profile </NavLink></li>
  //   </ul>
  // </nav>
  <>
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="#mockinterview">Mock Interview</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>     
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}
