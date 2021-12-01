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
  <Navbar className="header" expand="lg">
    <Container>
      <LinkContainer to="/home"><Navbar.Brand href="/home">Interview Roulette <i class="fas fa-dice"></i></Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer className="nav-link" to="/home">
          <NavLink href="/home">Home</NavLink>
          </LinkContainer>
          <LinkContainer className="nav-link" to="/profile">
            <NavLink href="/profile">Profile</NavLink>
          </LinkContainer>
          <LinkContainer className="nav-link" to="/mockinterview">
            <NavLink href="/mockinterview">Mock Interview</NavLink>
          </LinkContainer>
        </Nav>     
      </Navbar.Collapse>
      <h6>Logged in as <strong>Tanner</strong></h6>
    </Container>
  </Navbar>
  </>
  )
}
