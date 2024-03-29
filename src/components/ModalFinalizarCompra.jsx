import { useState } from "react"
import Swal from "sweetalert2";


export default function ModalFinalizarCompra() {
    const [mensaje, setMensaje] = useState('mensaje')
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('MecanicaBustosCarrito')) || [] )
  
    const pedido = carrito.map((el,index) => `\n .#${index+1}, Nombre: ${el.nombre}, cantidad :${el.cantidad}, id:${el.uuid} \n`);
    
    
    const [datos, setDatos] = useState({
        email: '',
        direccion : '',
        metodoPago: 'Efectivo',
        nombre: '',
        apellido: '',
    })

    const handleSubmit =(e) =>{
        e.preventDefault()
        
        if (datos.email.trim() === '' || datos.direccion.trim() === '' || datos.nombre.trim() === '' || datos.apellido.trim() === ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Rellene los campos solicitados!',
                  })
                  return

            }
            

            const encodedMessage = encodeURIComponent(mensaje);
            window.location.href = `https://wa.me/+542346617430?text=${encodedMessage}`
    
     
    }

    const handleChange = event => {

        setDatos({
            ...datos, [event.target.name]: event.target.value
        })

        setMensaje(
            `${pedido}\n Nombre Completo: ${datos.nombre} ${datos.apellido}\n Direccion: ${datos.direccion}\n Metodo de pago seleccionado: ${datos.metodoPago}\n Email: ${datos.email}`
        )
      };

  return (
    <>
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Finalizar Compra
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <form className="" onSubmit={handleSubmit}>
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Completar los datos solicitados</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                
                
                    <div className="mb-3  d-flex">
                        <input className="form-control" type="text" name="nombre" placeholder="Nombre*" value={datos.nombre} onChange={handleChange} />
                        <input className="form-control" type="text" name="apellido"  placeholder="Apellido*" value={datos.apellido} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" type="email" name="email" placeholder="Email*" value={datos.email} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="text" name="direccion"  placeholder="Dirección*" value={datos.direccion} onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                        <select className="form-control" name="metodoPago" id="metodoPago" value={datos.metodoPago} onChange={handleChange} >
                            <option  disabled value="...">Metodo de Pago</option>
                            <option value="efectivo">Efectivo</option>
                            <option value="transferencia">Transferencia Bancaria</option>
                        </select>
                    </div>
                  
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button onClick={handleSubmit} type="button" className="btn btn-primary">Enviar Pedido</button>
            </div>
            </form>
            </div>
        </div>
        </div>
    </>
  )
}
