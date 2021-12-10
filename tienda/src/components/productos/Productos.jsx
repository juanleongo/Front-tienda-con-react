import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Productos.md.css"

export const Productos = () => {
    return (

        <div className="container">
            <div class="archivo">
                <h2>Subir Archivo</h2>

                <form method="post" enctype="multipart/form-data" action="/upload" class="cargarSubir">
                    <label>Archivo</label> <input type="file" name="uploadFile" />
                    <input type="submit" class="subir" value="cargar" />
                </form>
            </div>

        </div>




    )
}
