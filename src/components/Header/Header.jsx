import React from "react";
import "./Header.css";
import img from "./Logoo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      
        <img className="logo" src={img} alt="logo" />
   
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
