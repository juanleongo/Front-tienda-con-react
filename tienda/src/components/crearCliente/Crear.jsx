import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';

export const Crear = () => {



    const [creacionCliente, setcreacionCliente] = useState({
        identification: '',
        name: '',
        password: '',
        password_confirmation: '',
        address: '',
        phone: '',
        email: '',
        branch: '61b22e0f5f5200000e0045d2',
        city: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setcreacionCliente(prevState => ({
            ...prevState,
            [name]: value

        }))
        console.log(creacionCliente);
    }

    const [data, setData] = useState([]);

    const peticionPost = async () => {
        await axios.post("http://localhost:8000/api/auth/signupBuyer", creacionCliente)
            .then(response => {
                setData(data.concat(response.data))
            })
    }
    //     const[cedula,setCedula]=  useState(false)
    //     const[name,setNombre]=  useState(false)
    //     const[adress,setDireccion]=  useState(false)
    //     const[phone,setTelefono]=  useState(false)
    //     const[email,setCorreo]=  useState(false)

    //     const valorCedula=(cedulaEnviar) =>{
    //         if(cedulaEnviar.trim()){
    //             setCedula(true)
    //         }
    //     }
    //       const valorNombre=(nombreEnviar) =>{
    //         if(nombreEnviar.trim()){
    //             setNombre(true)
    //         }

    //     }
    //     const valorDireccion=(direccionEnviar) =>{
    //         if(direccionEnviar.trim()){
    //             setDireccion(true)
    //         }

    //     }
    //     const valorTelefono=(telefonoEnviar) =>{
    //         if(telefonoEnviar.trim()){
    //             setTelefono(true)
    //         }

    //     }

    //     const valorCorreo=(correoEnviar) =>{
    //         if(correoEnviar.trim()){
    //             setCorreo(true)
    //         }

    //     }

    //     const enviar=(e)=>{
    //         e.preventDefault()

    //         if(cedula===true &&
    //             name===true &&
    //             adress===true &&
    //             phone===true &&
    //             email===true){
    //                 console.log("se envio")
    //     }else{
    //         console.log("paila perro")
    //     }
    //     setTimeout(()=>{window.location.reload()},5000)
    // } 
    // const url = "http://localhost:8000/api/auth/signupBuyer"

    return (
        <div className="container mt-4">
            <div className="card border-secondary">
                <div className="card-header">
                    Nuevo Cliente
                </div>
                <div className="card-body">
                    
                        <div className="mb-3">
                            <label className="form-label">Cedula</label>
                            <input type="text" className="form-control" name="identification" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre completo</label>
                            <input type="text" className="form-control" name="name" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="address" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control" name="phone" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo Electronico</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirmacion Contraseña</label>
                            <input type="password" className="form-control" name="password_confirmation" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ciudad</label>
                            <input type="text" className="form-control" name="city" onChange={handleChange} />
                        </div>
                        <button className="btn btn-primary" onClick={peticionPost}>Guardar</button>{"   "}
                        <a href="/clientes" className="btn btn-secondary">Cancelar</a>
                    
                </div>
            </div>
        </div>

    )
}
