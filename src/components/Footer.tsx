import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de correo electrónico
import PERN from "../assets/PERN_Stack.png";
import MERN from "../assets/MERNSTACK.png";

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de envío del formulario
    console.log("Formulario enviado");
  };

  return (
    <footer className="bg-dark text-light py-4 mt-5 p-5">
      <Container fluid className="">
        <Row>
          <Col>
            <h3>PQRS</h3>
            <p>Utiliza el siguiente formulario para enviar tus PQRS.</p>
            <Form onSubmit={handleSubmit}>
              {/* Campos del formulario */}
              <Form.Group controlId="formName">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type="text" placeholder="Nombre completo" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Correo electrónico" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Tu mensaje:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe tu mensaje aquí"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
          <Col className="text.center">
            <h3>Contacto</h3>
            <p>Nombre: Daniel Argumero</p>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "10px" }}
            />
            dfargumero1701@gmail.com
            <br />
            <br />
            <p>Desarrollador PERN</p>
            <p>
              Soy un desarrollador PERN altamente capacitado y con experiencia
              en el desarrollo de aplicaciones web robustas y eficientes. Mi
              pasión por la tecnología y mi compromiso con la excelencia me
              convierten en el candidato ideal para tu proyecto. Contrátame y
              juntos crearemos soluciones innovadoras que impulsen tu negocio
              hacia el éxito.
            </p>
            <img src={PERN} alt="PERN Stack" height="150px" />
            <img
              src={MERN}
              alt="PERN Stack"
              height="150px"
              style={{ paddingLeft: "50px" }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
