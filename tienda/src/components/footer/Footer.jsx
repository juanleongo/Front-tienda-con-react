import React from "react";
import "./Footer.md.css"


export const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="l-footer">
      
       
      </div>
      <ul className="r-footer">
        <li>
          <h2>
            Social</h2>
          <ul className="box">
            <li><>Instagram</></li>
            <li><>Facebook</></li>
            <li><>Pinterest</></li>
          </ul>
        </li>
        <li >
          <h2>
            Productos</h2>
          <ul className="box">
            <li><>Menú</></li>
            <li><>Servicios</></li>
            <li><>Reservas</></li>

          </ul>
        </li>
        <li>
          <h2>Contacto</h2>
          <ul className="box">
            <li><>+57 31531696</></li>
            <li><>salysalsa@gmail.com</></li>

          </ul>
        </li>
      </ul>
      <div className="b-footer">
        <p>
          Todos los derechos revervados © - JUVENTIC 2021 </p>
      </div>
    </footer>

  </>
    );
  }