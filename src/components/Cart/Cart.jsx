import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CardCart from "../CardCart/CardCart";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext);
  

  if (totalQuantity === 0) {
    return (
      <div className="containerCart">
        <h1 className="notItems">No hay items en el carrito</h1>
        <Link to="/menu" className="option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        
        {cart.map((item) => (
          <CardCart
          key={item.name}
          name={item.name}
          price={item.price}
          quantity={item.quantity}

        />
        ))}
      </div  >
       <div className="containerButtonCart">
      <button onClick={() => clearCart()} className="Button">
        {" "}
        Limpiar carrito
      </button>
      <Link to="/shop" className="option">
        <button className="Button">Siguiente</button>
      </Link>
      </div>
    </div>
  );
};


export default Cart;
