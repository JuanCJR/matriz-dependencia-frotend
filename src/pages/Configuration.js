import React, { useState } from "react";
import { PageTemplate } from "./PageTemplate";
import {
  Container,
  Col,
  Row,
  Card,
  Form,
  Button,
  ListGroup,
  Tab,
} from "react-bootstrap";
export function Configuration() {
  return (
    <PageTemplate>
      <Container fluid className="mt-4 text-left">
        <Row>
          <Col sm={12}>
            <Tab.Container>
              <h1>Configuración</h1>
              <Row>
                {/* Opciones */}
                <Col sm={3}>
                  <ListGroup defaultActiveKey="#dbLink">
                    <ListGroup.Item action href="#dbLink">
                      Base de Datos
                    </ListGroup.Item>
                    <ListGroup.Item action href="#dirLink">
                      Directorios
                    </ListGroup.Item>
                    <ListGroup.Item action href="#gitLabLink">
                      GitLab
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                {/* Tab de configuracion */}
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#dbLink">
                      <DataBaseTab />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#dirLink">
                      <DirectoriesTab />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#gitLabLink">
                      <GitLabTab />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
}

//Carta para tab de configuracion de base de datos
function DataBaseTab() {
  return (
    <Card>
      <Card.Body>
        <h2>Configuración de Base de Datos</h2>
        <Form className="mt-4">
          <h3>Conexion a Base de datos</h3>
          {/* Input Host */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Host
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input Puerto */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Puerto
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input usuario */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Usuario
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input Contraseña */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Contraseña
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="password" />
            </Col>
          </Form.Group>

          <h3>Base de datos</h3>
          {/* Input produccion */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Producción
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input Staging */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Staging
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input Test */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Test
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          <h3>Coleciones</h3>
          {/* Input C# collection */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              C#
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input JAVA collection */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              JAVA
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input PLSQL collection */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              PLSQL
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input edges collection */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Edges
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input Graph collection */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Graph
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          <div className="d-flex flex-row-reverse">
            {/* Boton para guardar configuracion */}
            <Button className="">Guardar</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

//Carta para tab de configuracion de directorios
function DirectoriesTab() {
  return (
    <Card>
      <Card.Body>
        <h2>Configuración de Directorios</h2>
        <Form className="mt-4">
          {/* Input Backend */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Backend
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input Produccion */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Produccion
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input Staging */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Staging
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input Testing P */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Testing P
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input Testing S*/}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Testing S
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input C# */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              C#
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input Java*/}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Java
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input Plsql*/}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              PLSQL
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          <div className="d-flex flex-row-reverse">
            {/* Boton para guardar configuracion */}
            <Button className="">Guardar</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

//Carta para tab de configuracion de gitlab
function GitLabTab() {
  return (
    <Card>
      <Card.Body>
        <h2>Configuración de GitLab</h2>
        <Form className="mt-4">
          {/* Input target branch */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Target Branch
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input STAGE branch */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Stage Branch
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input Prod branch */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Prod Branch
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          {/* Input Host Alemana */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Host Clinica Alemana
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input Token Alemana */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Token Clinica Alemana
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input Host Testing */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Host Testing
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>
          {/* Input Token Testing */}
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Token Testing
            </Form.Label>
            <Col sm={4}>
              <Form.Control column type="text" />
            </Col>
          </Form.Group>

          <div className="d-flex flex-row-reverse">
            {/* Boton para guardar configuracion */}
            <Button className="">Guardar</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
