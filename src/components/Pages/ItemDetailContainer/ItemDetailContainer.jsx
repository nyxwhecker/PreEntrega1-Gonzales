import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardMenu from "../../CardMenu/CardMenu";
import data from "../CategoryPage/Data.json";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null); 

  useEffect(() => {
   
    console.log("ID from URL:", id);
    const selectedProduct = data.find((item) => item.id === id);

    if (selectedProduct) {
      setProducts(selectedProduct);
    }
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {products ? <CardMenu char={products} /> : null}
    </div>
  );
};

export default ItemDetailContainer;
