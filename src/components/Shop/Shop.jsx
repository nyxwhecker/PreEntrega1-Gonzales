import React, { useContext } from "react";
import "./Shop.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Checkout from "../Pages/Checkout/Checkout";

const Shop = () => {
  const { cart } = useContext(CartContext);

  const calculateTotal = () => {
    if (cart.length === 0) {
      return 0;
    }

    const total = cart.reduce((acc, product) => {
      const productTotal = product.quantity * product.price;
      return acc + productTotal;
    }, 0);

    return total;
  };

  return (
    <div>
      <h1 className="titleCheckout"> Ya estamos por finalizar tu compra </h1>

      <div className="container">
        <form>
          <div className="form-group">
            <span>ChocoCat-Coffe</span>
          </div>
          <div className="form-group">
            <label htmlFor="retiros">Retiros:</label>
            <select id="retiros" name="retiros">
              <option value="sucursal">Sucursal</option>
              <option value="pedidos">Pedidos Ya</option>
            </select>
          </div>
          <div className="total">
            <span>Total: ${calculateTotal()}</span>
          </div>
          <Link to="/checkout">
            <button type="submit" className="Button">
              Checkout
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Shop;
