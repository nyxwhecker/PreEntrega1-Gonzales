import React, { useContext, useState } from "react";
import "./Checkout.css";
import MessageSuccess from "../../MessageSuccess/MessageSuccess";
import TextField from "@mui/material/TextField";
// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { CartContext } from "../../../context/CartContext";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const Checkout = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const { clearCart } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    setValues(initialState);
    setPurchaseID(docRef.id);
  };
  return (
    <div>
      <h1 className="titleMainShop">Finalizar Compra</h1>
      <form className="containerShop" onSubmit={handleOnSubmit}>
        <h1 className="titleShop">Shop</h1>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400, backgroundColor: "#916853" }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
          required
        />
        <TextField
          placeholder="email"
          style={{ margin: 10, width: 400, backgroundColor: "#916853" }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
          required
        />
        <TextField
          placeholder="email"
          style={{ margin: 10, width: 400, backgroundColor: "#916853" }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
          required
        />
        <TextField
          placeholder="phone"
          style={{ margin: 10, width: 400, backgroundColor: "#916853" }}
          name="phone"
          value={values.phone}
          onChange={handleOnChange}
          required
        />
        <button onClick={clearCart} className="Button">Send</button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default Checkout;
