import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Body from "../layout/Body";
import Restaurante from "../pages/restaurante";

export default function AppRoutes() {
  return (
    <BrowserRouter> {/* responsável por englobar o app em navegação */}
      <Routes> {/* responsável pelas rotas */}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/" element={<Restaurante />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
