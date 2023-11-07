import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardHeader,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AddIcon from "@mui/icons-material/Add";
import { FormComments } from "../Components/FormComments";
import { CommentsList } from "../Components/CommentsList";
import { colors } from "../Components/base";

export function CardPlacePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Card sx={{ p: 2, backgroundColor: colors.purple, my: 3 }}>
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
                textAlign: "center",
              }}
            >
              <ThumbUpOffAltIcon />
              <Typography sx={{ mx: 1 }}> 10</Typography>
            </Box>
          </Box>
          <Typography paragraph align="center">
            calle direccion numero ### esatdo estado Mexico
          </Typography>

          <Typography paragraph align="center">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ p: 2, backgroundColor: colors.purple }} align="center">
        <CardHeader
          action={
            <IconButton
              sx={{
                my: 3,
                float: "right",
                backgroundColor: colors.green,
                color: "white",
                "&:hover": { backgroundColor: colors.greenHover },
              }}
              onClick={() => {
                navigate("/FormComments");
              }}
            >
              <AddIcon sx={{ color: "whitesmoke" }}></AddIcon>
            </IconButton>
          }
          title="Comentarios"
        />

        <CommentsList></CommentsList>
      </Card>
    </Box>
  );
}
