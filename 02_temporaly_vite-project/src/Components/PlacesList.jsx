import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { getAllList } from "../api/list.api";

export function PlacesList() {
  const [places, setPlaces] = useState([]); // guardar elementos en vez de usar una variable

  // cargar los datos
  useEffect(() => {
    // console.log("pagina cargada");
    async function loadList() {
      const resp = await getAllList();
      setPlaces(resp.data); // guardar los datos desde usestate dentro de la peticion
      // console.log(resp.data);
    }
    loadList();
  }, []);

  return (
    <div>
      <TableContainer component={Paper} sx={{mt:5}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Descripcion</TableCell>
              <TableCell align="center">Direccion</TableCell>
              <TableCell align="center">Like</TableCell>
              <TableCell align="center">Disike</TableCell>
              <TableCell align="center">Ver</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {places.map((place) => (
              <TableRow key={place.id}>
                <TableCell component="th" scope="row">
                  {place.nombre}
                </TableCell>
                <TableCell sx={{ maxWidth: 300 }}>
                  {place.descripcion}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ maxWidth: 300 }}
                >{`${place.calle} #${place.numero} Col.${place.colonia} 
              ${place.ciudad} ${place.estado} C.P.${place.cp}`}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                  </IconButton>
                  {place.like}
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                  </IconButton>
                  {place.dislike}
                </TableCell>
                <TableCell align="right">
                  <Button size="small" variant="contained">
                    Ir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
