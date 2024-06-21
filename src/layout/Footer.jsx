import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaGoogle } from "react-icons/fa";
 
function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Central do meio ambiente</h5>
         
          </div>
 
          <div className="col-lg-4 col-md-6">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li>Email: meioambiente@gmail.com</li>
              <li>Telefone: (47) 3302-8952</li>
              <li>Endereço: Rua Dos Noia, 420</li>
              <div>
                <FaInstagram/>
                 
                <FaFacebook/>

                <FaWhatsapp/>

                <FaGoogle/>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
 
const footerStyle = {
  backgroundColor: 'black',
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