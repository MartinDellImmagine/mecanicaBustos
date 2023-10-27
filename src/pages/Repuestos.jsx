
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { onValue, ref } from "firebase/database";
import { db } from "../config/firebase";
import FiltrosRepuestos from "../components/FiltrosRepuestos";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const Repuestos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [filtrarCategorias, setFiltrarCategorias] = useState([]);

  const navigate = useNavigate();

  //filtrar productos

  const productosFiltrados =
    filtrarCategorias.length > 0
      ? productos.filter(
          (producto) =>
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
            filtrarCategorias.some((str) =>
              producto.categoria.toLowerCase().includes(str)
            )
        )
      : productos.filter((producto) =>
          producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );

  const handleFilterCategorias = (e) => {
    e.target.checked
      ? setFiltrarCategorias([...filtrarCategorias, e.target.id.toLowerCase()])
      : setFiltrarCategorias(
          filtrarCategorias.filter(
            (selectedId) => selectedId !== e.target.id.toLowerCase()
          )
        );
  };

  //borrar del carrito
  const handleRemove = (uuid) => {
    const nuevoCarrito = carrito.filter((producto) => producto.uuid !== uuid);
    setCarrito(nuevoCarrito);
  };

  //finalizar compra
  const handlePurchase = () => {
    localStorage.setItem("MecanicaBustosCarrito", JSON.stringify(carrito));
    navigate("/comprar");
  };

  //Sumar productos al carrito
  const handleAdd = (producto) => {
    const uuid = producto.uuid;

    const productoExistente = carrito.find(
      (producto) => producto.uuid === uuid
    );
    if (productoExistente) {
      const nuevoCarrito = carrito.map((producto) =>
        producto.uuid === uuid
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  //leer los productos
  useEffect(() => {
    onValue(ref(db, `/productos`), (snapshot) => {
      setProductos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((producto) => {
          setProductos((oldArray) => [...oldArray, producto]);
        });
      } else {
        console.error("Error al cargar los productos");
      }
    });
  }, []);

  //Spinner de carga
  if (productos.length == 0)
    return (
      <>
        <NavBar />
        <div className="mt-2">
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <NavBar />

      {/*  Barra de busqueda */}

      <div className="container mt-5">
        <div className="d-flex">
          <div className="input-group mb-3">
            <FiltrosRepuestos
              productos={productos}
              handleFilterCategorias={handleFilterCategorias}
            />

            <input
              className="form-control mr-sm-2 mt-2"
              type="search"
              placeholder="Ingrese el nombre de un producto"
              aria-label="Search"
              name="busqueda"
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <Modal
            carrito={carrito}
            handleRemove={handleRemove}
            handlePurchase={handlePurchase}
          />
        </div>

        {/* Pintar los productos */}

        <div className="row row-cols-1 row-cols-md-4 g-4 py-5">
          {productosFiltrados.map((producto) => (
            <div className="col" key={producto.uuid}>
              <div className="card">
                <img
                  src={producto.imagen}
                  className="card-img-top"
                  alt={producto.nombre}
                />

                <div className="card-body">
                  <h5 className="card-title text-center">
                    {producto.nombre.toUpperCase()}
                  </h5>
                  <hr />
                  <p className="card-text text-center">
                    {producto.descripcion}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center display-6">
                    ${producto.precio}
                  </li>
                </ul>
                <button
                  className="btn btn-success"
                  onClick={() => handleAdd(producto)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Repuestos;
