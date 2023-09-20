import React, { useState } from "react";

import './App.css'
import Header from './components/Header/Header';
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"

const App = () => {
  // dentro de los [nombre de la  variable / la funcion que me permite mutar esa variable]
  // useState ([el valor inicial del nombre de mi variable])
  const [ ] = useState(1)
  return (
   
      <div>

      <NavBar/>

      <ItemListContainer/>
      
      <Header  title="Welcome to ChocoCat-Coffe" />
        
      <div className='UserSection'>
  
        <CardUser
          name= "chocoCat-Coffe"
          date= "Se unio en el 2023"
          description= "Welcome to ChocoCat-Coffe"
          img="https://i.pinimg.com/originals/6d/3e/2d/6d3e2db09b92eae597d5e00e329f1f1b.jpg"
        />

      </div>

      
      </div>
     
      
  );
};

export default App;
