import React,{useState}from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Reportes.md.css"

export const Reportes = () => {

    const [listacliente,setlistaclientes] = useState([])

    
        const listarclientes= async () => {
          const res = await axios.get('http://localhost:8000/api/sellers/getAllBuyers', {
            headers: {
              Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiI4Y2ExYmEyOGFjNTVkZjE1ZjA0YzRjNmM1NzRiZjgwMjliYzkxZmUzY2RkYjRlOGNhMjIyZWQ4NzY2ZjlkNmRhODA5N2FlZDRkZWIwNjg0NyIsImlhdCI6MTYzOTE4OTgyNC4zMzEzNDYsIm5iZiI6MTYzOTE4OTgyNC4zMzEzNSwiZXhwIjoxNjcwNzI1ODI0LjMyNzg5OSwic3ViIjoiNjFiMjNhY2M5NjExMDAwMGRlMDA1ZTI2Iiwic2NvcGVzIjpbXX0.G7mpiPeKaV2T3eytIx4a7qLLee5OdYr2WtZHzfHkOIM0W5sUvKyTlzaed2Lk49XSmOwp8fmmKL78NYBc8ipzY1YXxm5a0-tKfWvLIloJ24iJ53HaQ6fEEsDwYOgd7zlSyo_FpRkt64tjtziVOKmOFxQcHkyyTP3cDOPrewcltSH070GPeWoWzXkdXyKe9petswnTR-gJ0Z97FX2Bvk8EgM2OAc3Qz24tlCQSlU5V7-4dVW1BKQEa-zGMIFmblDQexDu-KYXzFF8HGd8TamlzUe5K3MTfxO9bVURiPcG88K0GN9cR_cH8JoFYIuKWCmZ3wcO4l2hNNU8H8VaqceUatlSBtJcx1yvuHf2oQLAqd8QcrMaaZa0tb5-cod6x9v9Aj47cTe4euXCygLZ7i6eXXhYI2c8T1IXx42B9SHgMK0YN8bppTGE-g8D0egaUn9GC-FUAnT7lRfiKVSDx0j1gahtT73SrT553uQ_Li3XZ0U1fKoi11oB21TS2LNa32o75RIRIzKoLtz4dmF3ZK2r937yMp2GFrGskiBjNNXDv01d9WN5VuXCdckIjjEMN9sPs3VLzFJa2X6MbVMKc_raMYt2ylQg9tbPczBDzmnmYJEDh63OF0Gs-E13xtfmFlZyTwJoShNqF4AmNWeZiqQeL8WPQb-iSOT-I9mA2NZm6S8A"
            }
            
          })
          
          setlistaclientes(res.data.data)
        }
        
      

    return (
       
  <div className="contenedor">
  <div className="listas">


      <div className="col-lg-2 " ><button class="listaClientes" onClick={listarclientes}>Listado Clientes</button></div>

      <div classNames="col-lg-2 " ><button class="ventasClientes">Ventas Clientes</button></div>

      <table className="table table-bordered table-striped text-center mt-4 ">
        <thead>
          <tr>
            <th scope="col">cedula</th>
            <th scope="col">Nombre</th>
            <th scope="col">email</th>
            <th scope="col">Celular</th>
            <th scope="col">direccion</th>
          </tr>
        </thead>
        <tbody>


          {
            listacliente.map((cliente, id) =>

              <tr key={id}>
                <td>
                  {cliente.identification}
                  {/* {cliente.identification} */}
                </td>
                <td >
                  {cliente.name}
                  {/* {cliente.name} */}
                </td>
                <td>
                  {cliente.email}
                  {/* {cliente.email} */}
                </td>
                <td>
                  {cliente.phone}
                  {/* {cliente.phone} */}
                </td>
                <td>
                  {cliente.address}
                  {/* {cliente.address} */}
                </td>
                
              </tr>
            )}
        </tbody>
        
            
        
        </table>



  </div>
        


</div>
    )
}
