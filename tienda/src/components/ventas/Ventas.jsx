import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Ventas.md.css"

export const Ventas = () => {

    const [cliente, setCliente] = useState([])
    const [productos, setProductos] = useState([])

    const [clienteSeleccionado, setclienteSeleccionado] = useState({

        identification: ''

    })
    const [productoSeleccionado, setproducosSeleccionado] = useState({
        _id: '',
        name: '',
        iva: '',
        quantity: '',
        status: '',
        price: '',
        provider_id: ''


    })
 




    const traerCliente = async () => {
        const res = await axios.get("http://localhost:8000/api/sellers/getOneBuyerByIdentification/" + clienteSeleccionado.identification, {
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiI2YTEyNzRjY2ZiZWFhZTNkYTA4ZDI1ODJkMmIxMmVjMTE3NTllMDE3MTFiM2FmNDQ5NzQ5Nzc1YTQ0ODVlODc5Mjg1MzE0ZjI3ZDJlOGM4OCIsImlhdCI6MTYzOTE4NjA0NC41MDYzODQsIm5iZiI6MTYzOTE4NjA0NC41MDYzOSwiZXhwIjoxNjcwNzIyMDQ0LjQxMjc1OCwic3ViIjoiNjFiMjNiMTA5NjExMDAwMGRlMDA1ZTI3Iiwic2NvcGVzIjpbXX0.gc8x-OO_V8zEvq6yGK8RHyAUr8h1QobhP6Oa9CM_fpGz9ad0CuYkU6wEkf-8QRD8raahNWFSC7Tk5PUPTjuvYNVSOSlhUDKOO3opCVzNCYrxYzSaz-SOL1wD11k9HMd-Fj6YD_s6Rb5UioAti1mNR4P5iOr59McpSPkpGdgHdw0SefyTtH1NpZXzDR5MMNfJf6T98Ndqd06j1OsB4yM-rmMfAk9ue218dvI0YG1Srwq9H3qthW_uADbjbWj22jU0ze9ISseab0be6eqIYRVDyihk5mQuwsdL1d0Jt8LTkQ_2SM-xLsYgZ1kcm3_jDzqOIxAsGLjRbam_g0x-rH4DjOHt83U2CaTsfYUjth20Py2_oAPiZ15fAgtFjAAMdYm38zMhFSDZxSP-eqFhPxYrQIvlohRP-yEueko-vNeC3OrcHHUPftkX32G26XSiONRPd7G-06xfUSbTycWLH3OwRSJVWrqFcs5uHcSTRhq41fzGtphZCR2efD_aF-0L3LUrU5FqdVnoEJsFIPBGNXpurs5zC6O6JB1-WeD5mvQKCzygcjFwjw3BnlaMnmLaXa7bye96-IzrvMODpTA81GP-aiWRQlg7_59HNi__RmSywi_XjdYijw86zkFkHQHoVpgchHGu3GnSRHSIDObpjYAH_m49U8w6QhngLBN8UA2yQa4 "
            }
        })
        console.log(res.data.data)
        setCliente(res.data.data)

    }

    const traerProducto = async () => {
        const res = await axios.get("http://localhost:8000/api/sellers/getOneProduct/" + productoSeleccionado._id, {
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MTlkYmU0NTk4NTQwMDAwOGIwMDRiODIiLCJqdGkiOiI1ZDZhNmE5MGQwYjE2YzYwNmM0ZjNlZWM0OGY1Y2M4OWY2NzNhZGFjMzI3ZmZhM2JhZWE3MjkwYWI1MGZlMDhlYjNlZGY0YWU2MDRlYTA0YSIsImlhdCI6MTYzOTE2OTAxMS4wNTM5MzYsIm5iZiI6MTYzOTE2OTAxMS4wNTM5NCwiZXhwIjoxNjcwNzA1MDExLjA0OTg5LCJzdWIiOiI2MWIyM2FjYzk2MTEwMDAwZGUwMDVlMjYiLCJzY29wZXMiOltdfQ.brGYZqAaq-3BEIAwvTV2RRfDxZ_7TLyEOG21K9hGFvzCAzjR0BJ2G5LEe-96R8COn3pJZFT7X9N5Rg6G86Jk2ySI6Et4xa68mDCqCToOsEdxdRRoJq8pzfLQTkDap-E-SZ7PVaLzSbpD4vrFgp7-v3_Uurlvf1lX0Pf3dbnGqMpp24EL2TM_mjSdjZO0OCTqShp_nzRUgSlmOKPsgcbjQTAobG4Hzw1I7iGasobB0qsb6GVdal1GX-i9pLmN8XE9C9DlVqCHcRHNuGsHqrC4FXZiEpaNzg7IzmbOiHH3WroT7j0znW4_PbGC2--oda77-zMOq3G0fNBAV0iH-9NRzkoCPhCS8MM--GAyTHmltzDrUSTo1kbRltkc42uBEMKxJlwMAYNY2dNQ9xyaEaxxVAFWJKZHGnZAnOM3ZVp4IrAGXIvDm6O4BOg4vYBl54gFl8HVIa-S-OtnAO0lqxPwW95JzwnCVUbaFcnLGX9utcQE7PBwNIVi-ke7sPG0rqqLjOuP9PBFzt5S6ZCJEbatPa9T2MmvLej9TpVyR46rFXE_E5N-DM2Z69EtQVaOIpsxiHSLgl5lDRms4ghM2eJepzpZSv7KbOf1qqKM_q4IhSer_uzi7kiZvDUawEp4rSuOpWdEXVfZUj5koeCY-P16_WYpI67fRSnFr2unHOIgJ8c"
            }
        })
        console.log(res.data.data[0])
        setProductos(res.data.data[0])

    }
  
 
    

    const handleChange = e => {
        const { name, value } = e.target;
        setclienteSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log(clienteSeleccionado);
    }

    const handleChangepro = e => {
        const { name, value } = e.target;
        setproducosSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log(productoSeleccionado);
    }

 
    

    return (

        <div className="contenedor">

            <div className="productos">

                <div className="productosGrande">

                    <div className="cliente">
                        <div>
                            <label>Cedula:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="identification"
                                value={clienteSeleccionado && clienteSeleccionado.identification}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <button className="btn btn-primary" onClick={traerCliente}>Consultar</button>
                        </div>

                        <div>
                            <label>Cliente:</label>


                            <input type="text" name="identification" value={cliente.name}></input>


                        </div>


                    </div>
                    <div className="individuales uno">

                        <div><label>Codigo Producto:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="_id"
                                value={productoSeleccionado && productoSeleccionado._id}
                                onChange={handleChangepro}
                                required
                            />
                        </div>

                        <div>
                            <button className="btn btn-primary" onClick={traerProducto}>Consultar</button>
                        </div>
                        <div>
                            <label>Nombre Producto</label>
                            <input type="text" name="name" value={productos.name} /></div>



                        <div>
                            <label>Cantidad:</label>
                            <input
                                type="text"
                                name="cantidad"
                                value={productos.quantity}
                            />

                        </div>


                        <div><label>Valor Venta:</label><input
                            type="text"
                            name="price"
                            value={productos.price}
                        /> </div>


                    </div>




                    <div className="individuales">

                      
                    <div><label>Codigo Producto:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="_id1"
                                value={productoSeleccionado && productoSeleccionado._id}
                                onChange={handleChangepro}
                                required
                            />
                        </div>

                        <div>
                            <button className="btn btn-primary" onClick={traerProducto}>Consultar</button>
                        </div>
                        <div>
                            <label>Nombre Producto</label>
                            <input type="text" name="name1" value={productos.name} /></div>



                        <div>
                            <label>Cantidad:</label>
                            <input
                                type="text"
                                name="cantidad1"
                                value={productos.quantity}
                            />

                        </div>


                        <div><label>Valor Venta:</label><input
                            type="text"
                            name="price1"
                            value={productos.price}
                        /> </div>


                    </div>


                    <div className="individuales">

                       
                    <div><label>Codigo Producto:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="_id2"
                                value={productoSeleccionado && productoSeleccionado._id}
                                onChange={handleChangepro}
                                required
                            />
                        </div>

                        <div>
                            <button className="btn btn-primary" onClick={traerProducto  }>Consultar</button>
                        </div>
                        <div>
                            <label>Nombre Producto</label>
                            <input type="text" name="name2" value={productos.name} /></div>



                        <div>
                            <label>Cantidad:</label>
                            <input
                                type="text"
                                name="cantidad2"
                                value={productos.quantity}
                            />

                        </div>


                        <div><label>Valor Venta:</label><input
                            type="text"
                            name="price2"
                            value={productos.price}
                        /> </div>

                    </div>


                </div>



                <div className="precios">

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

                        <button className='btn btn-primary' type="submit" name="consultar_cli"  >consultar</button>
                    </div>

                    <div>
                        <button className='btn btn-primary' type="submit" name="consultar_cli"  >consultar</button>
                    </div>




                </div>

            </div>


        </div>

    )
}
