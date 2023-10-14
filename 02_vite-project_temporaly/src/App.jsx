import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import  CardPlace  from "./Components/Card/CardPlace";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CardPlace></CardPlace>
    </>
  );
}

export default App;
