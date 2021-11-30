import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav, NavLink, NavDropdown, Dropdown, NavItem, Menu, Item, Divider } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
          <LinkContainer to="/home">
          <NavLink href="/home">Home</NavLink>
          </LinkContainer>
          <LinkContainer to="/profile">
            <NavLink href="/profile">Profile</NavLink>
          </LinkContainer>
          <LinkContainer to="#mockinterview">
            <NavLink href="#mockinterview">Mock Interview</NavLink>
          </LinkContainer>
        </Nav>     
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}
