import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class Navigation extends React.Component {
  render() {
    const navigationComponents = this.props.routes.map(r => <Nav.Link href={r.path}>{r.name}</Nav.Link>);
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          Cantemus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {navigationComponents}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
