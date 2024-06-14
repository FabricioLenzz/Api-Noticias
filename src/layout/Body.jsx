import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";

 
export default function Body() {
  return (
    <>
      <Header />
 
      <Outlet />
      
 
      <Footer />
    </>
  );
}