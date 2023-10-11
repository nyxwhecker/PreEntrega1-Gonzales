import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardMenu.css"


const CardMenu = ({ char }) => {
  const { image, name, ingredientes } = char;

  return (
    <Card sx={{ maxWidth: 345 }} className="card-menu-image">
      <CardActionArea>
        <CardMedia component="img" image={image} alt="green iguana" style={{ width: "220px", height: "200px" }} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ingredientes}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardMenu;
