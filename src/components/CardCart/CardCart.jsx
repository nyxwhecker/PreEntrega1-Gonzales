import React, { useContext } from 'react';
import "./CardCart.css";
import { CartContext } from '../../context/CartContext';

const CardCart = ({ name, price, quantity }) => {
  
  const { removeItem } = useContext(CartContext);

  const handleDelete = () => {
    removeItem(name);
  }

  return (
    <div className='container-main-card'>
        <div className='container-card'>
        <h2 className='titleCard'>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <div className='Button-Card'>
        <button className="Button" onClick={handleDelete}>Eliminar</button>
      </div>
       </div>
    </div>
  );
};

export default CardCart;
