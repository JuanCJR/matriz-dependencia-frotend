import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const PageTemplate = (props) => {
  let history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  return (
    <React.Fragment>
      {/** Header */}
      <header>
        <Navbar>
          <Navbar.Brand className="mx-auto">Alemana-logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav.Link className="mr-5 ml-5" onClick={() => handleClick("/")}>
              Inicio
            </Nav.Link>
            <Nav.Link
              className="mr-5 ml-5"
              onClick={() => handleClick("/manager")}
            >
              Manager
            </Nav.Link>
            <Nav.Link
              className="mr-5 ml-5"
              onClick={() => handleClick("/configuracion")}
            >
              Configuración
            </Nav.Link>
           
          </Navbar.Collapse>
        </Navbar>
      </header>
      {/** Main */}
      <main>{props.children}</main>
     
    </React.Fragment>
  );
};
