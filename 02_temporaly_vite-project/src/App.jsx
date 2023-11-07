import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CardPlacePage } from "./pages/CardPlacePage";
import { ListPage } from "./pages/ListPage";
import { Navigation } from "./Components/Navigation";
import { FormComments } from "./Components/FormComments";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/CardPlacePage" element={<CardPlacePage />} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/FormComments" element={<FormComments />} />
        <Route path="/FormComments/:id" element={<FormComments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// {/* <Route path="/" element={<Navigate to="/Card" />} /> */}
