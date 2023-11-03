import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, price, image }) => {
  const [ quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      name,
      price,
      image,
      quantity
    };

    addItem(item, quantity);

  };

  return (
    <div>
      <ItemCount initial={1} onAdd={(quantity) => handleOnAdd(quantity)} />
    </div>
  );
};

export default ItemDetail;
