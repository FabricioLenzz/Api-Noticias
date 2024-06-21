import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Home from "../pages/Home.jsx";
import News from "../pages/News.jsx";
import Noticias from "../pages/Noticias.jsx";
import Form from "../layout/Form.jsx";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Body />}>
        <Route index element={<Form />} /> {/* Rota inicial dentro de Body */}
        <Route path="Form" element={<Form />} />
          <Route path="home" element={<Home />} />
          <Route path="News" element={<News />} />
          <Route path="Noticias" element={<Noticias />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

