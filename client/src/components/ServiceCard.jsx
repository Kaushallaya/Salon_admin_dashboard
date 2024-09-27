import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ServiceCard = ({ service }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            service.length === 0
              ? "https://res.cloudinary.com/dkbk51c9j/image/upload/v1666175300/logo_black_copydsd_d3azq9.png"
              : service.img
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.length === 0 ? "Lizard" : service.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.length === 0
              ? "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"
              : service.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
