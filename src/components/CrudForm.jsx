import  { useEffect, useState } from "react";


import { db } from "../config/firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from 'firebase/database'

export default function CrudForm() {
  

    const [isEdit, setIsEdit] = useState(false)
    const [tempUuid, setTempUuid] = useState('')
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({
        nombre: 'nombre',
        precio: 'precio',
        imagen: 'imagen',
        stock:  'stock',
        categoria: 'categoria',
        descripcion: 'descripcion',
        uuid: ''
    })


    //agregar productos
    const handleSubmit = (e)=>{
        e.preventDefault()

        writeDatabase(producto)
        
        
    }

    const handleChange = (e) => {
        //Actualiza los datos cuando son cambiados
        setProducto({
            ...producto, [e.target.name]: e.target.value
        })
    }

    //escribir base de datos

    const writeDatabase = (producto)=>{
      const uuid = uid()
        set(ref(db,`productos/${uuid}` ),{
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          stock:  producto.stock,
          categoria: producto.categoria,
          descripcion: producto.descripcion,
          uuid: uuid
        })
    }

    //leer base de datos

    useEffect(()=>{
        onValue(ref(db,`/productos`), snapshot =>{
            setProductos([])
            const data = snapshot.val();
            if (data !== null){
                Object.values(data).map(producto =>{
                    setProductos((oldArray)=>[...oldArray, producto])
                }
        )}
        })
    }, [])


    //borrar el producto

    const handleDelete = (producto)=>{
        remove(ref(db, `/productos/${producto.uuid}`))        
    }


    //editar un producto

    const handleUpdate = (producto)=>{
      setIsEdit(true),
      setTempUuid(producto.uuid)
      setProducto(producto)
    }


    const handleSubmitChange = ()=>{
      update(ref(db, `/productos/${tempUuid}`),
      {
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        stock:  producto.stock,
        categoria: producto.categoria,
        descripcion: producto.descripcion,
        uuid: tempUuid
      }
      )

      setIsEdit(false)
    }


    

  return (
    <div className="container mt-5">
      <div className="contianer">
        <form className="">
          <div className="row">
            <h2>Agregar un producto</h2>
            <div className="col-4">
              <div className="mb-3">
                <input
                  className="form-control"
                  type="input"
                  name="nombre"
                  value={producto.nombre}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-4 mb-3">
              <input
                className="form-control"
                type="input"
                name="precio"
                value={producto.precio}
                onChange={handleChange}
              />
            </div>
            <div className="col-4 mb-3">
              <input
                className="form-control"
                type="input"
                name="stock"
                value={producto.stock}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 mb-3">
              <input
                className="form-control"
                type="input"
                name="imagen"
                value={producto.imagen}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 mb-3">
              <input
                className="form-control"
                type="input"
                name="categoria"
                value={producto.categoria}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="input"
                name="descripcion"
                value={producto.descripcion}
                onChange={handleChange}
              />
            </div>
          </div>
          {isEdit ? (
            <>
              <button className="btn btn-primary" onClick={handleSubmitChange}>
                Editar
              </button>
              <button className="btn btn-warning" onClick={()=> setIsEdit(false)}>X</button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleSubmit}>
              Agregar
            </button>
          )}
        </form>
      </div>
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">nombre</th>
            <th scope="col">precio</th>
            <th scope="col">stock</th>
            <th scope="col">Categoria</th>
            <th scope="col">descripcion</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((e) => (
            <tr key={e.uuid}>
              <td scope="row">{e.uuid}</td>
              <th>{e.nombre}</th>
              <td>{e.precio}</td>
              <td>{e.stock}</td>
              <td>{e.categoria}</td>
              <td>{e.descripcion}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(e)}
                >
                  Eliminar
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdate(e)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
