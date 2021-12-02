import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reportes.md.css"

export const Reportes = () => {
    return (
       
  <div className="contenedor">
  <div className="listas">


      <div className="col-lg-2 " ><button class="listaClientes">Listado Clientes</button></div>
      <div classNames="col-lg-2 " ><button class="ventasClientes">Ventas Clientes</button></div>



  </div>
  <div className="tablaLista">
      <table id="tabla">
      </table>


  </div>


</div>
    )
}
