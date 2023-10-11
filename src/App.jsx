import React, { useState } from "react";

import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";

//PAGES
import Home from "./components/Pages/Home";
import Menu from "./components/Pages/Menu/Menu";
import About from "./components/Pages/About";
import Reservation from "./components/Pages/Reservation";
import NotFound from "./components/Pages/NotFound";
import CategoryPage from "./components/Pages/CategoryPage/CategoryPage";

const App = () => {
  return (
    <div>
      <Header title="Welcome to ChocoCat-Coffe" />

      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<CategoryPage/>} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>

      <div className="UserSection">
        <CardUser
          name="chocoCat-Coffe"
          date="Se unio en el 2023"
          description="Welcome to ChocoCat-Coffe"
          img="https://i.pinimg.com/originals/6d/3e/2d/6d3e2db09b92eae597d5e00e329f1f1b.jpg"
        />
      </div>
    </div>
  );
};

export default App;
