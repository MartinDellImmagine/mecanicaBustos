import  { useState } from 'react'

import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';
import ModalFinalizarCompra from '../components/ModalFinalizarCompra';


export default function FinalizarCompra() {
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('MecanicaBustosCarrito')) || [] )


    const navigate = useNavigate()

    const handleRemove = (uuid) => {
      const nuevoCarrito = carrito.filter((producto) => producto.uuid !== uuid);
      setCarrito(nuevoCarrito);

     localStorage.setItem('MecanicaBustosCarrito', JSON.stringify(nuevoCarrito))
    };
    


    const subtotales = carrito.map(item => item.cantidad * item.precio);
    const total = subtotales.reduce((acc, subtotal) => acc + subtotal, 0);
     
    const pintarCarrito = (carrito)=>(
      carrito.map((producto, index) => (
        
          <div key={index} className="card w-100 mb-3">
            <div className="card-body">
              <h5 className="card-title tituloFinalizarcompra">{producto.nombre.toUpperCase()}</h5>
              <p className="card-text precioFinalizarcompra">
                ${producto.precio}
              </p>
              <p className='card-text cantidadFinalizarcompra'>
                {producto.cantidad}
              </p>
              <button onClick={()=>handleRemove(producto.uuid)} className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
      ))
    )

    const pintarPasarAComprar =()=>(
      <div className='card w-100 mb-3'>
          <div className="card-body">
            <h5>Total a pagar ${total}</h5>
            <ModalFinalizarCompra carrito={carrito} />
          </div>
      </div>
    )

    const pintarCarritoVacio = ()=> (
      <div>
        <h1 className='text-center'>El Carrito esta vacio</h1>
        <p  className='text-center linkComprar' onClick={()=>navigate('/repuestos')}>Ir a Comprar</p>
      </div>
    )
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className='text-center'>Finalizar compra</h1>
        {
          carrito.length > 0 ?  pintarCarrito(carrito) :<></> 
    
        }
        {
          carrito.length > 0 ?  pintarPasarAComprar() : pintarCarritoVacio()
        }
      </div>
    </div>
  );
}
