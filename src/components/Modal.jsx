

export default function Modal({ carrito, handleRemove, handlePurchase}) {
    

    return (
    <div>
<button type="button" className="btn carrito" data-bs-toggle="modal" data-bs-target="#exampleModal">
{
  carrito.length ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
}
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
