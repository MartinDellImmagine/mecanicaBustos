import { useNavigate } from "react-router-dom";
import { logOut } from "../config/firebase";
import { useUserContext } from "../context/UserContext";


const NavBar = () => {

    const { user  } = useUserContext()

    const navigate = useNavigate()

    const handleLogout =  async (e)=> {
        e.preventDefault()
        try {
          logOut()
          navigate('/')
        } catch (error) {
          console.log(error);
        }}

    return (
        <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
        <div className="container-fluid">
       

        <a className="navbar-brand" href="/">
           
          <span className="text-warning">Inicio</span>
        </a>
            
        

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/repuestos">Repuestos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/turnos">Turnos</a>
            </li>
            {
                user ? user.email === "test@test.com" ?  <li className="nav-item"><a className="nav-link" href='/admin'>Panel Administracion</a> </li> : console.log('') : null
            }
   
          </ul>

          <hr className="d-md-none text-white-50" />

          <ul className="navbar-nav  flex-row flex-wrap text-light">

           <li className="nav-item col-6 col-md-auto p-3">
                <i className="bi bi-instagram"></i>
                <small className="d-md-none ms-2">Instagram</small>  
            </li>

            <li className="nav-item col-6 col-md-auto p-3">
              <i className="bi bi-whatsapp"></i>
              <small className="d-md-none ms-2">WhatsApp</small>
            </li>

            <li className="nav-item col-6 col-md-auto p-3">
              <i className="bi bi-facebook"></i>
              <small className="d-md-none ms-2">Facebook</small>
            </li>
            <li className="nav-item col-6 col-md-auto p-3">
                <i className="bi bi-geo-alt"></i>
              <small className="d-md-none ms-2">Ubicacion</small>
            </li>

          </ul>
        
     
          <form className="d-flex">
          {
                user ?  <button  onClick={handleLogout} className="btn btn-outline-danger d-none d-md-inline-block" type="button">Cerrar Sesion</button> :   <button onClick={()=> navigate('/login')} className="btn btn-outline-primary d-none d-md-inline-block" type="button">Iniciar Sesion</button>
        }
    
          </form>
        </div>
     
        </div>  
      </nav>

    );
}

export default NavBar;
