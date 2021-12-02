import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from 'react-bootstrap'
import "./Header.css"


export const Header = () => {

  return (

    <div>
      <Navbar  expand="lg" className="cabecera"  >
        <Container>
          <Navbar.Brand className="text-light" href="#home">La generica </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light" href="/productos">Productos</Nav.Link>
              <Nav.Link className="text-light" href="/clientes">Clientes</Nav.Link>
              <Nav.Link className="text-light" href="/ventas">Ventas</Nav.Link>
              <Nav.Link className="text-light" href="/reportes">Reportes</Nav.Link>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

