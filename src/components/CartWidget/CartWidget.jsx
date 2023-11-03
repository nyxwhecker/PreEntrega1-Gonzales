import React from 'react';
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  return (
    <div>
      <Link to="/cart">
        <ShoppingCartIcon />
        { totalQuantity }
      </Link>
     
    </div>
  );
};

export default CartWidget;
