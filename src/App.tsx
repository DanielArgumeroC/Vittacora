import React from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import Us from "./components/us";
import "./App.css"; // Importar estilos CSS
import Products from "./components/Products";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="App">
        <div className="Init_Content">
          <SearchBar />
          <Us />
        </div>
        <div className="Prod_Content">
          <Products></Products>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
