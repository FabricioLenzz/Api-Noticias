import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Restaurante from "../pages/restaurante";
import Produtos from "../pages/Produtos"
import Contatos from "../pages/Contatos"

export default function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Restaurante />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contatos" element={<Contatos />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}