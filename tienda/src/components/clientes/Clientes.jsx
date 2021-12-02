import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export const Clientes = () => {
    return (
        <div>
            <div className="container">
                <div className="container">
                    <a href="/crear" class="btn btn-outline-primary mt-4">Registrar
                        
                    </a>
                </div>
                <h1 align="center" class="text-dark bg-primary">Datos Clientes</h1>
                <table className="table table-bordered table-striped text-center mt-4 ">
                    <thead>
                        <tr>
                            <th scope="col"># Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                        <td>
                               001
                            </td>
                            <th scope="row">
                                pepito
                            </th>
                            <td>
                                perez
                            </td>
                            <td>
                                3105557887
                            </td>
                            <td>
                                usuario
                            </td>

                            <td>
                                <a href="/editar" class="btn btn-outline-info">editar</a>
                                <a href="/eliminar" class="btn btn-outline-danger">eliminar</a>

                            </td>
                        </tr>





                    </tbody>
                </table>
            </div>


        </div>
    )
}

