import { useState, useEffect } from "react";
import axios from "axios";
import "./ListDrinks.css";
import CardDrinks from "../CardDrinks/CardDrinks";

import { Link } from "react-router-dom";


const ListDrinks = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://api.sampleapis.com/coffee/hot").then((res) => setChars(res.data))
  })
  return (
    <div className="Cards-List">
       {chars.map((char) => {
        return(
          <div key={char.id}>
            <Link to={`/item/${char.id}`}>
              <CardDrinks char={char} />
            </Link>
          </div>
        )
       })}
    </div>
  )
}

export default ListDrinks