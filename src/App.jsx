import React from "react";

import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

//PAGES
import Home from "./components/Pages/Home/Home";
import Menu from "./components/Pages/Menu/Menu";
import About from "./components/Pages/About/About";
import Reservation from "./components/Pages/Reservation/Reservation";
import NotFound from "./components/Pages/NotFound/NotFound";
import CategoryPage from "./components/Pages/CategoryPage/CategoryPage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Pages/Checkout/Checkout";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    <div>
      <Header title="Welcome to ChocoCat-Coffe" />

      <Router>
        <div>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/home" element={<Home />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Reservation" element={<Reservation />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </div>
      </Router>
    </div>
  );
};

export default App;
