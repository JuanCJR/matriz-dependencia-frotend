import React, { useState } from "react";
import { PageTemplate } from "./PageTemplate";
import {
  Container,
  Col,
  Row,
  Card,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import repositoriesData from "../data/repositoriosCargados.json";

export function Manager() {
  const [state, setstate] = useState({
    repositories: repositoriesData,
  });

  let history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  return (
    <PageTemplate>
      <Container fluid className="mt-4 text-left">
        <h1>Manager</h1>
        <Row>
          {/* Filtros */}
          <Col sm={2}>
            <Card>
              <Card.Body>
                <h4>Filtro</h4>
                {/* Formulario de filtro */}
                <Form className="mt-3">
                  <Form.Row>
                    {/* Input nombre del repositorio */}
                    <Col sm={8}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          size="sm"
                          placeholder="Nombre del repositorio"
                        />
                      </Form.Group>
                    </Col>
                    {/* Boton para aplicar filtro */}
                    <Col>
                      <Button>Aplicar</Button>
                    </Col>
                  </Form.Row>

                  {/* Checkboxs */}
                  <Form.Group>
                    <Form.Check type="checkbox" label="Java" value="java" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Check type="checkbox" label="PLSQL" value="plsql" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Check type="checkbox" label="C#" value="csharp" />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            {/* Boton para crear nueva carga */}
            <Button className="mt-3 w-100" 
            onClick={()=>handleClick('/manager/carga')}
            >Crear nueva carga</Button>
          </Col>

          {/* Lista de repositorios cargados */}
          <Col>
            <Card>
              <Card.Body>
                <h4>Repositorios Cargados</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Tipo</th>
                      <th>Archivos</th>
                      <th>Fecha de Creación</th>
                      <th>Fecha de Actualizacion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.repositories.map((r, index) => {
                      return (
                        <tr key={index + 1}>
                          <td>{index + 1}</td>
                          <td>{r.repoName}</td>
                          <td>{r.repoType}</td>
                          <td>{r.countFiles}</td>
                          <td>{r.createdAt}</td>
                          <td>{r.updatedAt}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
}
