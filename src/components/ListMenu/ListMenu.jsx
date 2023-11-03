import { useEffect, useState } from "react";
import "./ListMenu.css";
import CardMenu from "../CardMenu/CardMenu";
// DB Firestore
import { db } from "../../firebase/firebaseConfig";
// Firestore
import { collection, query, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import React from "react";

const ListMenu = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const selectedProduct = products.find((product) => product.id === id);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "Products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, []);

  return (
    <div className="Cards-List">
      {products.map((product) => {
        return <CardMenu product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ListMenu;
