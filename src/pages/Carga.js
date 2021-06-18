import React, { useState } from "react";
import { PageTemplate } from "./PageTemplate";
import { CustomRadioButton } from "../components/buttons/CustomRadioButton";
import {
  Container,
  Col,
  Row,
  Card,
  Form,
  Button,
  Table,
} from "react-bootstrap";

import repositoriesData from "../data/repositories.json";

/**
 *
 * Componente de vista de opciones de Carga
 *
 */
export function Carga() {
  const [state, setstate] = useState({
    tipoCarga: "",
    repositories: repositoriesData,
  });
  //Controlador para cambio de tipo de
  const handleChangeTipoCarga = (tipoCarga) => {
    setstate((state) => ({
      ...state,
      tipoCarga: tipoCarga,
    }));
  };

  return (
    <PageTemplate>
      <Container fluid className="mt-4 text-left">
        <h1>Carga</h1>
        <Row>
          {/* Parametros de Carga */}
          <Col sm={3}>
            <Card>
              
              <Card.Body>
                <h4>Carga Masiva</h4>
                {/*Formulario*/}
                <Form>

                  {/* Radio Button de tipo de carga */}
                  {/* <CustomRadioButton
                    changeValue={handleChangeTipoCarga}
                    buttonValues={["individual", "masiva"]}
                  /> */}

                  {/** Combobox de seleccion de lenguaje*/}
                  <Form.Group className="mt-4">
                    <Form.Label>Lenguaje</Form.Label>
                    <Form.Control as="select">
                      <option>Java</option>
                      <option>C#</option>
                      <option>PL/SQL</option>
                    </Form.Control>
                  </Form.Group>
                  <Button>Crear Carga</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* Info de Repos */}
          <Col sm={9}>
            <Card>
              
              <Card.Body>
                <h4>Repositorios</h4>

                <Table striped bordered hover className="mt-3">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Tipo</th>
                      <th># Archivos</th>
                      <th>Estado</th>
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
                            <td>{r.estado}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                  <Button className="w-100">Ejecutar</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
}
