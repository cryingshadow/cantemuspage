import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          Cantemus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {this.props.routes.map(r => <Nav.Link href={r.path}>{r.name}</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
