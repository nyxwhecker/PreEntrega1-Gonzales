import React from "react";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      Gracias por su compra! —{" "}
      <strong>id de transacción es: {purchaseID}</strong>
    </Alert>
  );
};

export default MessageSuccess;
