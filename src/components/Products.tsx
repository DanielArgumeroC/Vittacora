import React, { useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import "../Styles/Products.css"; // Importa tu archivo de estilos CSS

const Products: React.FC = () => {
  // Lista de categorías y colores
  const categories = [
    "Camiseta",
    "Pantalon",
    "Blusa",
    "Hoodies",
    "Buso",
    "Saco",
    "Conjunto",
    "Pijama",
  ];
  const colors = [
    "Azul",
    "Cafe",
    "Negro",
    "Blanco",
    "Gris",
    "Rojo",
    "Verde",
    "Amarillo",
    "Morado",
    "Naranja",
  ];

  // Generar todas las combinaciones de categoría y color
  const products = categories.flatMap((category) =>
    colors.map((color) => ({
      id: `${category}-${color}`,
      category: category,
      name: `${category} ${color}`,
      image: `${category.toLowerCase()}_${color.toLowerCase()}.jpg`,
    }))
  );

  // Paginación
  const productsPerPage = 20; // Mostrar 20 productos por página
  const totalPages = Math.ceil(products.length / productsPerPage);
  const [activePage, setActivePage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  return (
    <Container fluid>
      <h1 className="products-title">¡Descubre nuestros productos!</h1>
      <Row>
        {products
          .slice(
            (activePage - 1) * productsPerPage,
            activePage * productsPerPage
          )
          .map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="product-card">
                <Card.Img variant="top" src={`images/${product.image}`} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      {totalPages > 1 && (
        <Pagination className="justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === activePage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </Container>
  );
};

export default Products;
