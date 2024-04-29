import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faBox,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/LOGO_VITTACORA.png";
import "../Styles/Navigation.css";

const Navigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const handleToggleMenu = () => setShowMenu((prev) => !prev);
  const handleToggleLogin = () => setShowLogin((prev) => !prev);

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de inicio de sesión
    console.log("Iniciar sesión");
    setShowLogin(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-transparent mb-3">
        <Container fluid className="p-0 w-100">
          <Row className="m-0 p-0 w-100">
            {/* Logo on the left (Col size can be adjusted) */}
            <Col xs={8} className="justify-content-start">
              <Navbar.Brand href="#">
                <img src={Logo} alt="Logo" className="logo-image me-2" />
              </Navbar.Brand>
            </Col>

            {/* Title in the center (Col size can be adjusted) */}
            <Col
              xs={2}
              className="d-flex justify-content-center align-items-end"
            >
              <span className="navbar-title display-4 fw-bold me-3 d-none d-md-block">
                VITTACORA
              </span>
            </Col>

            {/* Menu toggle on the right (Col size can be adjusted) */}
            <Col
              xs={2}
              className="d-flex justify-content-end align-items-center h-30"
            >
              <span
                aria-controls="offcanvasNavbar"
                onClick={handleToggleMenu}
                className="text-white"
              >
                <FontAwesomeIcon icon={faBars} size="2x" />
              </span>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="end"
        aria-labelledby="offcanvasNavbar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              href="#login"
              className="d-flex align-items-center"
              onClick={handleToggleLogin}
            >
              <FontAwesomeIcon icon={faUser} className="icon me-2" />
              Iniciar sesión
            </Nav.Link>
            <Nav.Link href="#cart" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="icon me-2" />
              Carrito de compras
            </Nav.Link>
            <Nav.Link href="#products" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faBox} className="icon me-2" />
              Productos
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={showLogin}
        onHide={() => setShowLogin(false)}
        placement="start"
        backdropClassName="backdrop"
        className="Login_Part"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={Logo} alt="Logo VITTACORA" className="logo-image-login" />
            <FontAwesomeIcon icon={faUser} /> Iniciar sesión
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-4">
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="mt-2"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="mt-4">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="mt-2"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Iniciar sesión
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
