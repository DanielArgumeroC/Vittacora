import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/LOGO_VITTACORA.png";
import "../Styles/Us.css";

const Us: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsHidden(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Container
        fluid
        className={`overlay-content ${isHidden ? "hidden" : ""}`}
      >
        <img src={Logo} alt="Logo" className="logo-info" />
        <h3>Nuestra Marca</h3>
        <p>
          Somos una marca dedicada a ofrecer productos de alta calidad que
          satisfacen las necesidades de nuestros clientes. Con un enfoque en la
          innovación y la excelencia, estamos comprometidos a proporcionar
          experiencias únicas y memorables.
        </p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://tiktok.com/">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.example.com/">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <form onSubmit={handleRedirect}>
          <Button type="submit" className="ButtonCell">
            Comprar Ahora
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Us;
