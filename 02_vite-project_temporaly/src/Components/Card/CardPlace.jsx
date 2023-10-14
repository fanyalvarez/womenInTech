import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from '@mui/material/Button';

export default function CardPlace() {
  return (
    <Box sx={{ maxWidth: 600 }}>
      <Card sx={{ p: 2 }}>
        <CardMedia component="img" height="300" image="42-3456x2304.jpg" />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 2,
            }}
          >
            <Typography variant="h5">lugar x sa de cv</Typography>
            <Box
              sx={{
                display: "flex",
                mr: 1,
              }}
            >
              <ThumbUpOffAltIcon />
              <Typography sx={{ mx: 1 }}> 10</Typography>
            </Box>
          </Box>
          <Typography paragraph>
            calle direccion numero ### esatdo estado Mexico
          </Typography>

          <Typography paragraph>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          COMENTARIOS
        </Typography>
        <CardContent>
          <Typography variant="h5" textAlign="left" sx={{ mb: 3 }}>
            Coraline Jones
          </Typography>
          <Typography textAlign="left" sx={{ mb: 3 }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <Button variant="contained">Anadir comentario</Button>
      </Card>
    </Box>
  );
}
