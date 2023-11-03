import React, { useEffect, useState } from "react";
import CardMenu from "../../CardMenu/CardMenu";
import "./categoryPage.css";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(
        collection(db, "Products"),
        where("category", "==", categoryId)
      );

      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id});
      });

      setProducts(docs);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <div className="Cards-List">
        {products.map((product) => (
          <div style={{ margin: 10 }} key={product.id}>
            <CardMenu product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
