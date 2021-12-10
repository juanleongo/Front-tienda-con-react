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
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiIzNGVjODk2NTg1NzY0NTM3ZTI3M2I3NGYyOTM0MThiNzE4OTg1ODY4MDY3MjZjN2JkNTdmY2MxYWRmOTdlMjdhZDYyNmRiNmQxOGM1MGJiNyIsImlhdCI6MTYzOTE3MjIxNC41Mzc3OTksIm5iZiI6MTYzOTE3MjIxNC41Mzc4MDQsImV4cCI6MTY3MDcwODIxNC40NzMzNTgsInN1YiI6IjYxYjIzYWNjOTYxMTAwMDBkZTAwNWUyNiIsInNjb3BlcyI6W119.ksX7qlXZT_--PtpjESuuTN3H7upXWiHV2robj4_LDID5Us_au5jsxLniwuYcaowFnMiYBDUwEpQdvtyCpxVuTqjxFhkxksDa9KJ9Sx1KtP3WQqYNAcVg-ZvtQtK1hP5LfmmEOgbp6iFTcMKyir1NWk5FYwFxKVS4eZs1Swngl3LQemKp2vMLhhnX2cEQKj1DV7A4dh1VpEVb_av7qsMZCzjkL0bIZuQ9G_FxmE_GLlv_K46zX6_Lb7x347Ipp3cQwH3Sf53WvrWDzWbokFuakMg6iwisAzHWZb5b2mvCs-sFOGNwkgHV4YvZeS1zDfa0tzTOOB0OexeN_UhyLS8glcHzHtlYEl4_XXwv6xDr8uMQ2RjQ_3eEE1C7x1wtFz7FuHrH8L2sZABSv-Lgt9DgRINEaj-MWcoK_8VMaXFc49b_-dnthJxepSfCV528gtGuaX9JUVBzRHBF3jhUbfAaEGY_ZBSPZ5Pttba9Y418mNSKnMkZya3-mcqcZOGaxwWueap8M83Gkm2lHONkLmakKGj4xgaVj6IJjwi00Yrs_Sld0xwpLabAa-gGsuCjetaPVFFQc8-S0l_uHKUtSrBclAZhJ_Z7svXynWpEGW_hjILC-MMn92fWEyaNq76Xhr0tLh8OCOO87vwNDYCWh4IW2ncbjIzX2THvsoLCvgdtZHo"
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

  // const editar = () => {
  //   let dataNueva = clientes;
  //   dataNueva.map(clientes => {
  //     if (clientes.identification === clienteSeleccionado.identification) {
  //       clientes.name = clienteSeleccionado.name;
  //       clientes.email = clienteSeleccionado.email;
  //       clientes.phone = clienteSeleccionado.phone;
  //       clientes.address = clienteSeleccionado.address;

  //     }
  //   });
  //   setClientes(dataNueva);
  //   setModalEditar(false)

  // }

  const eliminar = () => {
    setClientes(clientes.filter(cliente => cliente.identification !== clienteSeleccionado.identification))
    setModalEliminar(false)
  }

  const peticionPut = async()=>{
    await axios.patch("http://localhost:8000/api/sellers/updateBuyer/"+ clienteSeleccionado._id,clienteSeleccionado,{
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiIzNGVjODk2NTg1NzY0NTM3ZTI3M2I3NGYyOTM0MThiNzE4OTg1ODY4MDY3MjZjN2JkNTdmY2MxYWRmOTdlMjdhZDYyNmRiNmQxOGM1MGJiNyIsImlhdCI6MTYzOTE3MjIxNC41Mzc3OTksIm5iZiI6MTYzOTE3MjIxNC41Mzc4MDQsImV4cCI6MTY3MDcwODIxNC40NzMzNTgsInN1YiI6IjYxYjIzYWNjOTYxMTAwMDBkZTAwNWUyNiIsInNjb3BlcyI6W119.ksX7qlXZT_--PtpjESuuTN3H7upXWiHV2robj4_LDID5Us_au5jsxLniwuYcaowFnMiYBDUwEpQdvtyCpxVuTqjxFhkxksDa9KJ9Sx1KtP3WQqYNAcVg-ZvtQtK1hP5LfmmEOgbp6iFTcMKyir1NWk5FYwFxKVS4eZs1Swngl3LQemKp2vMLhhnX2cEQKj1DV7A4dh1VpEVb_av7qsMZCzjkL0bIZuQ9G_FxmE_GLlv_K46zX6_Lb7x347Ipp3cQwH3Sf53WvrWDzWbokFuakMg6iwisAzHWZb5b2mvCs-sFOGNwkgHV4YvZeS1zDfa0tzTOOB0OexeN_UhyLS8glcHzHtlYEl4_XXwv6xDr8uMQ2RjQ_3eEE1C7x1wtFz7FuHrH8L2sZABSv-Lgt9DgRINEaj-MWcoK_8VMaXFc49b_-dnthJxepSfCV528gtGuaX9JUVBzRHBF3jhUbfAaEGY_ZBSPZ5Pttba9Y418mNSKnMkZya3-mcqcZOGaxwWueap8M83Gkm2lHONkLmakKGj4xgaVj6IJjwi00Yrs_Sld0xwpLabAa-gGsuCjetaPVFFQc8-S0l_uHKUtSrBclAZhJ_Z7svXynWpEGW_hjILC-MMn92fWEyaNq76Xhr0tLh8OCOO87vwNDYCWh4IW2ncbjIzX2THvsoLCvgdtZHo"
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
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiI1ZDZhNmE5MGQwYjE2YzYwNmM0ZjNlZWM0OGY1Y2M4OWY2NzNhZGFjMzI3ZmZhM2JhZWE3MjkwYWI1MGZlMDhlYjNlZGY0YWU2MDRlYTA0YSIsImlhdCI6MTYzOTE2OTAxMS4wNTM5MzYsIm5iZiI6MTYzOTE2OTAxMS4wNTM5NCwiZXhwIjoxNjcwNzA1MDExLjA0OTg5LCJzdWIiOiI2MWIyM2FjYzk2MTEwMDAwZGUwMDVlMjYiLCJzY29wZXMiOltdfQ.brGYZqAaq-3BEIAwvTV2RRfDxZ_7TLyEOG21K9hGFvzCAzjR0BJ2G5LEe-96R8COn3pJZFT7X9N5Rg6G86Jk2ySI6Et4xa68mDCqCToOsEdxdRRoJq8pzfLQTkDap-E-SZ7PVaLzSbpD4vrFgp7-v3_Uurlvf1lX0Pf3dbnGqMpp24EL2TM_mjSdjZO0OCTqShp_nzRUgSlmOKPsgcbjQTAobG4Hzw1I7iGasobB0qsb6GVdal1GX-i9pLmN8XE9C9DlVqCHcRHNuGsHqrC4FXZiEpaNzg7IzmbOiHH3WroT7j0znW4_PbGC2--oda77-zMOq3G0fNBAV0iH-9NRzkoCPhCS8MM--GAyTHmltzDrUSTo1kbRltkc42uBEMKxJlwMAYNY2dNQ9xyaEaxxVAFWJKZHGnZAnOM3ZVp4IrAGXIvDm6O4BOg4vYBl54gFl8HVIa-S-OtnAO0lqxPwW95JzwnCVUbaFcnLGX9utcQE7PBwNIVi-ke7sPG0rqqLjOuP9PBFzt5S6ZCJEbatPa9T2MmvLej9TpVyR46rFXE_E5N-DM2Z69EtQVaOIpsxiHSLgl5lDRms4ghM2eJepzpZSv7KbOf1qqKM_q4IhSer_uzi7kiZvDUawEp4rSuOpWdEXVfZUj5koeCY-P16_WYpI67fRSnFr2unHOIgJ8c"
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



