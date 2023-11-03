import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

// FIREBASE
import { db } from "../../../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

// Components
import CardMenu from "../../CardMenu/CardMenu";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
   
    const getProduct = async () => {
      const productRef = doc(db, "Products", id); 
      const productDoc = await getDoc(productRef); 
      if (productDoc.exists()) {
        setProductData({ ...productDoc.data(), id: productDoc.id }); 
      } else {
        console.log("El documento no existe.");
      }
    };
    getProduct();
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {productData ? <CardMenu product={productData} /> : null}
    </div>
    
  );
};

export default ItemDetailContainer;


