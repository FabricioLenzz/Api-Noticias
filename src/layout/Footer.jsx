import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
 
function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Central das Noticias</h5>
         
          </div>
 
          <div className="col-lg-4 col-md-6">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li>Email: vinanews@gmail.com</li>
              <li>Telefone: (47) 4002-8922</li>
              <li>Endereço: Rua Dos Curiosos, 666</li>
              <div>
                <FaInstagram/>
                 -
                <FaFacebook/>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
 
const footerStyle = {
  backgroundColor: '#0dcaf0',
  color: '#fff',
  padding: '2rem 0',
  display: 'flex',
 
};
 
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  display: 'block',
};
 
 
export default Footer;