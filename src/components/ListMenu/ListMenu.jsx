import React, { useState, useEffect } from "react";
import "./ListMenu.css";
import CardMenu from "../CardMenu/CardMenu";
import { Link } from "react-router-dom";
import data from "../Pages/CategoryPage/Data.json";
import { useParams } from "react-router-dom";

const ListMenu = () => {
  const [chars, setChars] = useState(data);
  const { id } = useParams();

  const selectedChar = chars.find((char) => char.id === id);

  if (selectedChar) {
    setChars(selectedChar);
  }

  return (
    <div className="Cards-List">
      {selectedChar ? ( 
        <div key={selectedChar.id}>
          <CardMenu char={selectedChar} />
        </div>
      ) : (
       
        chars.map((char) => (
          <div key={char.id}>
            <Link to={`/item/${char.id}`}>
              <CardMenu char={char} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ListMenu;
