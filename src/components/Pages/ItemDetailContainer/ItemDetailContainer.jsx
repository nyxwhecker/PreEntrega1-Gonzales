import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CardDrinks from "../../CardDrinks/CardDrinks";

const ItemDetailContainer = () => {
    let { id } = useParams();
  const [char, setChars] = useState([]);

  useEffect(() => {
    axios(`https://api.sampleapis.com/coffee/hot/${id}`).then((res) => 
     setChars(res.data)
     );
  }, [id]);

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        {char.id ? <CardDrinks char={char} /> : null}
        </div>
    )
  }
  
  export default ItemDetailContainer