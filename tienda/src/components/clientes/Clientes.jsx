import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import axios from "axios";
import "./Clientes.md.css"


export const Clientes = () => {

  //const url = "http://localhost:8000/api/sellers/getAllBuyers"

  const [clientes, setClientes] = useState([])


  const token = sessionStorage.getItem('access_token'.value)
  console.log(token)


  useEffect(() => {
    const cargarClientes = async () => {
      const res = await axios.get('http://localhost:8000/api/sellers/getAllBuyers', {
        headers: {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiI4Y2ExYmEyOGFjNTVkZjE1ZjA0YzRjNmM1NzRiZjgwMjliYzkxZmUzY2RkYjRlOGNhMjIyZWQ4NzY2ZjlkNmRhODA5N2FlZDRkZWIwNjg0NyIsImlhdCI6MTYzOTE4OTgyNC4zMzEzNDYsIm5iZiI6MTYzOTE4OTgyNC4zMzEzNSwiZXhwIjoxNjcwNzI1ODI0LjMyNzg5OSwic3ViIjoiNjFiMjNhY2M5NjExMDAwMGRlMDA1ZTI2Iiwic2NvcGVzIjpbXX0.G7mpiPeKaV2T3eytIx4a7qLLee5OdYr2WtZHzfHkOIM0W5sUvKyTlzaed2Lk49XSmOwp8fmmKL78NYBc8ipzY1YXxm5a0-tKfWvLIloJ24iJ53HaQ6fEEsDwYOgd7zlSyo_FpRkt64tjtziVOKmOFxQcHkyyTP3cDOPrewcltSH070GPeWoWzXkdXyKe9petswnTR-gJ0Z97FX2Bvk8EgM2OAc3Qz24tlCQSlU5V7-4dVW1BKQEa-zGMIFmblDQexDu-KYXzFF8HGd8TamlzUe5K3MTfxO9bVURiPcG88K0GN9cR_cH8JoFYIuKWCmZ3wcO4l2hNNU8H8VaqceUatlSBtJcx1yvuHf2oQLAqd8QcrMaaZa0tb5-cod6x9v9Aj47cTe4euXCygLZ7i6eXXhYI2c8T1IXx42B9SHgMK0YN8bppTGE-g8D0egaUn9GC-FUAnT7lRfiKVSDx0j1gahtT73SrT553uQ_Li3XZ0U1fKoi11oB21TS2LNa32o75RIRIzKoLtz4dmF3ZK2r937yMp2GFrGskiBjNNXDv01d9WN5VuXCdckIjjEMN9sPs3VLzFJa2X6MbVMKc_raMYt2ylQg9tbPczBDzmnmYJEDh63OF0Gs-E13xtfmFlZyTwJoShNqF4AmNWeZiqQeL8WPQb-iSOT-I9mA2NZm6S8A"
        }
      })
      console.log(res.data.data)
      setClientes(res.data.data)
    }
    cargarClientes()
  }, [])


  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);


  const [clienteSeleccionado, setclienteSeleccionado] = useState({
    _id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    identification: ''

  })

  const seleccionarCliente = (cliente, caso) => {
    setclienteSeleccionado(cliente);
    (caso === 'editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setclienteSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));

  }


  const peticionPut = async()=>{
    await axios.patch("http://localhost:8000/api/sellers/updateBuyer/"+ clienteSeleccionado._id,clienteSeleccionado,{
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiI4Y2ExYmEyOGFjNTVkZjE1ZjA0YzRjNmM1NzRiZjgwMjliYzkxZmUzY2RkYjRlOGNhMjIyZWQ4NzY2ZjlkNmRhODA5N2FlZDRkZWIwNjg0NyIsImlhdCI6MTYzOTE4OTgyNC4zMzEzNDYsIm5iZiI6MTYzOTE4OTgyNC4zMzEzNSwiZXhwIjoxNjcwNzI1ODI0LjMyNzg5OSwic3ViIjoiNjFiMjNhY2M5NjExMDAwMGRlMDA1ZTI2Iiwic2NvcGVzIjpbXX0.G7mpiPeKaV2T3eytIx4a7qLLee5OdYr2WtZHzfHkOIM0W5sUvKyTlzaed2Lk49XSmOwp8fmmKL78NYBc8ipzY1YXxm5a0-tKfWvLIloJ24iJ53HaQ6fEEsDwYOgd7zlSyo_FpRkt64tjtziVOKmOFxQcHkyyTP3cDOPrewcltSH070GPeWoWzXkdXyKe9petswnTR-gJ0Z97FX2Bvk8EgM2OAc3Qz24tlCQSlU5V7-4dVW1BKQEa-zGMIFmblDQexDu-KYXzFF8HGd8TamlzUe5K3MTfxO9bVURiPcG88K0GN9cR_cH8JoFYIuKWCmZ3wcO4l2hNNU8H8VaqceUatlSBtJcx1yvuHf2oQLAqd8QcrMaaZa0tb5-cod6x9v9Aj47cTe4euXCygLZ7i6eXXhYI2c8T1IXx42B9SHgMK0YN8bppTGE-g8D0egaUn9GC-FUAnT7lRfiKVSDx0j1gahtT73SrT553uQ_Li3XZ0U1fKoi11oB21TS2LNa32o75RIRIzKoLtz4dmF3ZK2r937yMp2GFrGskiBjNNXDv01d9WN5VuXCdckIjjEMN9sPs3VLzFJa2X6MbVMKc_raMYt2ylQg9tbPczBDzmnmYJEDh63OF0Gs-E13xtfmFlZyTwJoShNqF4AmNWeZiqQeL8WPQb-iSOT-I9mA2NZm6S8A"
      }
    }).then(response=>{
      let dataNueva= clientes;
      dataNueva.map(cliente=>{
        if (clientes.identification === clienteSeleccionado.identification) {
          clientes.name = clienteSeleccionado.name;
          clientes.email = clienteSeleccionado.email;
          clientes.phone = clienteSeleccionado.phone;
          clientes.address = clienteSeleccionado.address;
  
        }

      })
      setClientes(dataNueva);
      setModalEditar(false)
    })
  }

  const peticionDelete= async()=>{
    await axios.delete( "http://localhost:8000/api/sellers/deleteBuyer/"+clienteSeleccionado._id,{
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiI4Y2ExYmEyOGFjNTVkZjE1ZjA0YzRjNmM1NzRiZjgwMjliYzkxZmUzY2RkYjRlOGNhMjIyZWQ4NzY2ZjlkNmRhODA5N2FlZDRkZWIwNjg0NyIsImlhdCI6MTYzOTE4OTgyNC4zMzEzNDYsIm5iZiI6MTYzOTE4OTgyNC4zMzEzNSwiZXhwIjoxNjcwNzI1ODI0LjMyNzg5OSwic3ViIjoiNjFiMjNhY2M5NjExMDAwMGRlMDA1ZTI2Iiwic2NvcGVzIjpbXX0.G7mpiPeKaV2T3eytIx4a7qLLee5OdYr2WtZHzfHkOIM0W5sUvKyTlzaed2Lk49XSmOwp8fmmKL78NYBc8ipzY1YXxm5a0-tKfWvLIloJ24iJ53HaQ6fEEsDwYOgd7zlSyo_FpRkt64tjtziVOKmOFxQcHkyyTP3cDOPrewcltSH070GPeWoWzXkdXyKe9petswnTR-gJ0Z97FX2Bvk8EgM2OAc3Qz24tlCQSlU5V7-4dVW1BKQEa-zGMIFmblDQexDu-KYXzFF8HGd8TamlzUe5K3MTfxO9bVURiPcG88K0GN9cR_cH8JoFYIuKWCmZ3wcO4l2hNNU8H8VaqceUatlSBtJcx1yvuHf2oQLAqd8QcrMaaZa0tb5-cod6x9v9Aj47cTe4euXCygLZ7i6eXXhYI2c8T1IXx42B9SHgMK0YN8bppTGE-g8D0egaUn9GC-FUAnT7lRfiKVSDx0j1gahtT73SrT553uQ_Li3XZ0U1fKoi11oB21TS2LNa32o75RIRIzKoLtz4dmF3ZK2r937yMp2GFrGskiBjNNXDv01d9WN5VuXCdckIjjEMN9sPs3VLzFJa2X6MbVMKc_raMYt2ylQg9tbPczBDzmnmYJEDh63OF0Gs-E13xtfmFlZyTwJoShNqF4AmNWeZiqQeL8WPQb-iSOT-I9mA2NZm6S8A"
      }
    }).then(response=>{
      setClientes(clientes.filter(cliente => cliente.identification !== clienteSeleccionado.identification))
    setModalEliminar(false)
    })
  }

  



  return (
    

    <div className="container">        
      
      <a href="/crearcliente" className="btn btn-outline-primary mt-4">Registrar</a>
      <h1 align="center" className="text-dark bg-primary">Datos Clientes</h1>
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
            clientes.map((cliente, id) =>

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
                <td>
                  <button className="btn btn-primary" onClick={() => seleccionarCliente(cliente, 'editar')}>Editar</button>{"  "}
                  <button className="btn btn-danger" onClick={() => seleccionarCliente(cliente, 'eliminar')}>eliminar</button>

                </td>
              </tr>
            )}
        </tbody>
      </table>

      <div>      
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Cliente</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Cedula</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="identification"
              value={clienteSeleccionado && clienteSeleccionado.identification}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={clienteSeleccionado && clienteSeleccionado.name}
              onChange={handleChange}
            />
            <br />


            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={clienteSeleccionado && clienteSeleccionado.email}
              onChange={handleChange}
            />
            <br />

            <label>Celular</label>
            <input
              className="form-control"
              type="text"
              name="phone"
              value={clienteSeleccionado && clienteSeleccionado.phone}
              onChange={handleChange}
            />
            <br />

            <label>Direccion</label>
            <input
              className="form-control"
              type="text"
              name="address"
              value={clienteSeleccionado && clienteSeleccionado.address}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => peticionPut()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      </div>

       <div>    
      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el cliente {clienteSeleccionado && clienteSeleccionado.name}<br />
          con cedula {clienteSeleccionado.identification}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => peticionDelete()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
      </div>   
            
      
    </div>      
  

  );
}



