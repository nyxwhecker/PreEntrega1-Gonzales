import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardMenu.css";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const CardMenu = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-menu-image">
      <CardActionArea>
        <Link to={`/detail/${product.id}`}>
          <CardMedia
            component="img"
            image={product.image}
            alt="green iguana"
            style={{ width: "220px", height: "200px" }}
          />
        </Link>

        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"$" + product.price}
          </Typography>

          <ItemDetail
            name={product.name}
            price={product.price}
            image={product.image}
          />

          <Typography variant="body2" color="text.secondary">
            {product.ingredients}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardMenu;
