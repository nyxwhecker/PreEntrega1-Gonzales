import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.name)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity((prev) => prev + quantity);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemName) => {
    const cartUpdated = cart.filter((prod) => prod.name !== itemName);
    setCart(cartUpdated);
    setTotalQuantity(totalQuantity - 1);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };

  const isInCart = (itemName) => {
    return cart.some((prod) => prod.name === itemName);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
