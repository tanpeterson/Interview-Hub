import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, Dropdown, NavItem, Menu, Item, Divider } from 'react-bootstrap'

export default function Navigation() {
  return (
  <nav>
    <ul>
      <li> <NavLink exact activeClassName="current" to='/Home'> Home </NavLink></li>
      <li> <NavLink exact activeClassName="current" to='/Profile'> Profile </NavLink></li>
    </ul>
  </nav>
  // <>
  // <Navbar bg="light" expand="lg">
  //   <Container>
  //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="me-auto">
  //        <NavLink exact activeClassName="current" to='/Home'> Home </NavLink>
  //        <NavLink exact activeClassName="current" to='/Profile'> Profile </NavLink>
  //         {/* <NavLink href="/Home">Home</NavLink> */}
  //         {/* <NavLink href="/Profile">Profile</NavLink> */}
  //         {/* <NavDropdown title="Dropdown" id="nav-dropdown">
  //           <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
  //           <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
  //           <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
  //           <NavDropdown.Divider />
  //           <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
  //         </NavDropdown> */}
  //       </Nav>     
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  // </>
  )
}
//   <nav>
//     <ul>
//       <li> <NavLink exact activeClassName="current" to='/Home'> Home </NavLink></li>
//       <li> <NavLink exact activeClassName="current" to='/Profile'> Profile </NavLink></li>
//     </ul>
//  </nav>