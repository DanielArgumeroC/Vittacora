import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../Styles/SearchBar.css"; // Importa el archivo CSS

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    setShowSuggestions(text.trim() !== "");
  };

  const items = [
    "Hoodie",
    "Buso",
    "Saco",
    "Pantalón",
    "Pantaloneta",
    "Camiseta",
    "Conjunto",
    "Pijama",
    "Blusa",
  ];
  const colors = [
    "Verde",
    "Azul",
    "Negro",
    "Blanco",
    "Morado",
    "Café",
    "Naranja",
    "Rojo",
    "Amarillo",
    "Gris",
  ];

  const colorSingulars = colors.map((color) => color.toLowerCase());
  const itemSingulars = items.map((item) => item.toLowerCase());

  const combinations = itemSingulars.flatMap((item) =>
    colorSingulars.map((color) => `${item} ${color}`)
  );

  const filteredItems = combinations
    .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
    .slice(0, 5);

  return (
    <div className={`search-bar ${isScrolled ? "scrolled" : ""}`}>
      <Row className="mx-0 w-100">
        <Col xs="12" className="p-0">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={handleSearchChange}
            className="form-control search-input"
            width="100%"
          />
          {showSuggestions && searchText.trim() !== "" && (
            <ul className="list-group">
              {filteredItems.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
