

export default function Modal({ carrito, handleRemove, handlePurchase}) {
    

    return (
    <div className=''>
    <button type="button" className="btn btn-outline-success carrito" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Carrito
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">nombre</th>
                    <th scope="col">cantidad</th>
                    <th scope="col">precio</th>
                </tr>
            </thead>
        
      {carrito.length > 0 ? (
          <>
            {carrito.map((el, index) => (
              <tbody key={index}>
                <tr>
                    <td>{el.uuid}</td>
                    <td>{el.nombre}</td>
                    <td>{el.cantidad}</td>
                    <td>${el.precio}</td>
                    <td><button
                  className="btn btn-danger"
                  onClick={() => handleRemove(el.uuid)}
                >
                  X
                </button></td>
                </tr>
              </tbody>
            ))}
          </>
      ) : (
        <></>
      )}
      </table>

      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handlePurchase}>Comprar</button>
      </div>

      </div>
  </div>
</div>
    </div>
  )
}
