import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import { RouteUrls } from '../../../config';

import './TopNavbar.css';

function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container fluid>
        <Navbar.Brand href={RouteUrls.default}>{' Daily Circular '}</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href={RouteUrls.timeline}>Timeline</Nav.Link>
            <Nav.Link href={RouteUrls.myCirculars}>My Circulars</Nav.Link>
            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/'>Action</NavDropdown.Item>
              <NavDropdown.Item href='/'>Another action</NavDropdown.Item>
              <NavDropdown.Item href='/'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='/'>Notification</Nav.Link>
            <Nav.Link eventKey={2} href={RouteUrls.profile}>
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
