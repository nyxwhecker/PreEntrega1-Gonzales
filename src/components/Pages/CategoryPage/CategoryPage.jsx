import React, { useEffect, useState } from "react";
import CardMenu from "../../CardMenu/CardMenu";
import { useParams } from "react-router-dom";
import data from "../CategoryPage/Data.json";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  let { categoryId } = useParams();
  //console.log("category from URL:", categoryId);

  useEffect(() => {
    const filteredProducts = data.filter((product) => product.category === categoryId);
    setProducts(filteredProducts);

  }, [categoryId]);

  return (
    <div className="Cards-List">
      {products.map((product) => (
      <div style={{ margin: 10 }} key={product.id}>
        <CardMenu char={product} />
      </div>
    ))}
    </div>
  );
};

export default CategoryPage;
