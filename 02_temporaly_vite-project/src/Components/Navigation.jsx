import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Typography, Button } from "@mui/material";

export function Navigation() {
  return (
    <div>
      <Card sx={{ p: 2 }}>
        
        <Typography variant="h3">Lugares Seguros</Typography>
        <Typography variant="h3">Barra de navegacion</Typography>

        <div sx={{ display: "flex", alignItems: "center" }} spacing={2}>
          <Button><Link spacing={2} to="/CardPlacePage">Card de lugar</Link></Button>
          <Button><Link spacing={2} to="/ListPage">Lista de lugares</Link></Button>
          
          <Button>{/* <Link spacing={2} to ="/"> Formulario del lugar </Link> */}</Button>
          {/* <Button><Link spacing={2} to="/CreateComentPage">CreateComentPage</Link></Button> */}
        </div>

      </Card>
    </div>
  );
}
