import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ventas.md.css"

export const Ventas = () => {
    return (
        <div class="contenedor">

            <div class="productos">

                <div class="productosGrande">


                    <div class="individuales uno">

                        <div><label>Codigo Producto:</label> <input type="text" name="codigo_producto" required /> </div>

                        <div>  <input type="submit" name="consultar" value="Consultar" /> </div>
                        <div><label>Nombre Producto</label> <input type="text" name="nombre_producto" readonly /></div>

                        <input type="hidden" name="precioV" />
                        <input type="hidden" name="ivap" />
                        <input type="hidden" name="totalventa" />

                        <div><label>Cantidad:</label><input type="text" name="cantidad" /> </div>


                        <div><label>Valor Venta:</label><input type="text" name="valor_venta" /></div>


                    </div>




                    <div class="individuales">

                        <div><label>Codigo Producto:</label> <input type="text" name="codigo_producto1" required /> </div>

                        <div>  <input type="submit" name="consultar1" value="Consultar" />  </div>
                        <div><label>Nombre Producto</label> <input type="text" name="nombre_producto1" /></div>

                        <input type="hidden" name="precioV1" />
                        <input type="hidden" name="ivap1" />
                        <input type="hidden" name="totalventa1" />

                        <div><label>Cantidad:</label><input type="text" name="cantidad1" /> </div>


                        <div><label>Valor venta:</label><input type="text" name="valor_venta1" /></div>


                    </div>


                    <div class="individuales">




                        <div><label>Codigo Producto:</label> <input type="text" name="codigo_producto2" /> </div>

                        <div>  <input type="submit" name="consultar2" value="Consultar" />   </div>
                        <div><label>Nombre Producto</label> <input type="text" name="nombre_producto2" /></div>

                        <input type="hidden" name="precioV2" />
                        <input type="hidden" name="ivap2" />
                        <input type="hidden" name="totalventa2" />

                        <div><label>Cantidad:</label><input type="text" name="cantidad2" /> </div>


                        <div><label>Valor venta:</label><input type="text" name="valor_venta2" /></div>

                    </div>


                </div>



                <div class="precios">

                    <div>
                        <label>Valor Total:</label>
                        <input type="text" name="valorTotal" />
                    </div>

                    <div>
                        <label>Total Iva:</label>
                        <input type="text" name="totalIva" />
                    </div>

                    <div>
                        <label>Total con Iva:</label>
                        <input type="text" name="totalConIva" />
                    </div>


                    <div>

                        <input type="submit" name="calcular" value="calcular" />
                    </div>

                    <div>
                        <input type="submit" name="confirmar" value="Confirmar" />
                    </div>




                </div>

            </div>


        </div>
    )
}
