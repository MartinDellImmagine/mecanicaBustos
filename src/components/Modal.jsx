

export default function Modal({ carrito, handleRemove, handlePurchase}) {
    

    return (
      <div>
        {carrito.length > 0 ? (
          <button
            type="button"
            className="btn btn-outline-success mt-2 position-relative"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="bi bi-cart"></i>{" "}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carrito.length}
              <span className="visually-hidden"></span>
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary mt-2 disabled"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="bi bi-cart"></i>
          </button>
        )}

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <table className="table">
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
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleRemove(el.uuid)}
                              >
                                X
                              </button>
                            </td>
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
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handlePurchase}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
