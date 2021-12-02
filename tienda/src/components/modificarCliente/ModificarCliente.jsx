import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
export const ModificarCliente = () => {    
    
    
    return (
        <div class="container mt-4">
        <div class="card border-secondary">
            <div class="card-header">Modificar Cliente</div>
            <div class="card-body">
                <form action="/guardar" method="POST">                    
                    <div class="mb-3">
                        <label for="user" class="form-label">Nombre completo</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" tabindex="1"/>
                    </div>
                    <div class="mb-3">
                        <label for="user" class="form-label">Direccion</label>
                        <input type="text" class="form-control" id="direccion" name="direccion" tabindex="1"/>
                    </div>
                    <div class="mb-3">
                        <label for="user" class="form-label">Telefono</label>
                        <input type="text" class="form-control" id="telefono" name="telefono" tabindex="1"/>
                    </div>
                    <div class="mb-3">
                        <label for="user" class="form-label">Correo Electronico</label>
                        <input type="email" class="form-control" id="correo" name="correo" tabindex="1"/>
                    </div>
                    <button type="submit" href="/clientes" class="btn btn-primary" tabindex="5">Guardar</button>
                    <a href="/clientes" class="btn btn-secondary">Cancelar</a>
                </form>
            </div>
        </div>
    </div>
    )
}
