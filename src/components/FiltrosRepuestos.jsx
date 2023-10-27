


export default function FiltrosRepuestos({productos, handleFilterCategorias}) {

    // Utiliza un Set para almacenar temporalmente nombres únicos.
    const categoriasUnicosSet = new Set(productos.map(item => item.categoria));

    // Convierte el Set en un array de nombres únicos.
    const categorias = [...categoriasUnicosSet];

    const handleToggle = (e)=>{
      e.target.className === 'list-group-item list-group-item-action' ? e.target.className = 'list-group-item list-group-item-action active' : e.target.className = 'list-group-item list-group-item-action'
      
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log('submit');
     
    }
  
 
    
  return (
    <div>
      <button
        className="btn btn-outline-secondary mt-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="bi bi-funnel"></i>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Filtrar Productos
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <form action="">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Ordenar
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="#"
                        className='list-group-item list-group-item-action'
                        aria-current="true"
                        onClick={handleToggle}
                      >
                        De menor a mayor precio
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        onClick={handleToggle}
                      >
                          De mayor a menor precio
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        onClick={handleToggle}
                      >
                        Productos Destacados
                      </a>
                
             
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Categorias
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    
                    {categorias.map((categorias, index) => (
                      <div className="text-start list-group" key={index}>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={categorias}
                            onChange={handleFilterCategorias}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={categorias}
                          >
                            {categorias.toUpperCase()}
                          </label>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center mt-3">Filtrar por precio</p>
            <div className="input-group mt">
              <input
                type="text"
                placeholder="precio minimo*"
                aria-label="First name"
                className="form-control"
              />
              <input
                type="text"
                placeholder="precio maximo*"
                aria-label="Last name"
                className="form-control"
              />
            </div>

            <div className="d-grid gap-2 mt-5">
              <button
                onClick={handleSubmit}
                className="btn btn-primary "
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                Aplicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
