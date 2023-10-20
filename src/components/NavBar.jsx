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
                <i className="bi bi-instagram"
                onClick={() =>
                window.open("https://www.instagram.com/mecanicabustos/", "_blank")
            }></i>
                <small className="d-md-none ms-2">Instagram</small>  
            </li>

            <li className="nav-item col-6 col-md-auto p-3">
              <i className="bi bi-whatsapp"
              onClick={() =>
                window.open("https://api.whatsapp.com/send/?phone=542346692348&text&type=phone_number&app_absent=0", "_blank")
            }></i>
              <small className="d-md-none ms-2">WhatsApp</small>
            </li>

            <li className="nav-item col-6 col-md-auto p-3">
              <i className="bi bi-facebook"
              onClick={() =>
                window.open("https://www.facebook.com/tallermecanicobustos/", "_blank")
            }></i>
              <small className="d-md-none ms-2">Facebook</small>
            </li>
            <li className="nav-item col-6 col-md-auto p-3">
                <i className="bi bi-geo-alt"
                onClick={() =>
                    window.open("https://www.google.com/localservices/prolist?g2lbs=AP8S6EOovCxX-tULz_kbOl2H_OqWQp_huu25rqqmEbNgs8X6FEYQeehoixLK10WlNpNl1CGeJuX30KtOA4W02OnJpxXjVtGGmpZRGZLCYhfknzOlsYk8SqoouVMy8VxCHCVE78jTe1bj&hl=es-AR&gl=ar&ssta=1&q=taller%20bustos%20chivilcoy&oq=taller%20bustos%20chivilcoy&slp=MgA6HENoTUl2TTdsbElUbmdBTVZNRXRfQUIwTVhncl9SAggCYAB6hAJDaGQwWVd4c1pYSWdZblZ6ZEc5eklHTm9hWFpwYkdOdmVVakV4ZHI3NzdpQWdBaGFLUkFBRUFFWUFCZ0JHQUlpRjNSaGJHeGxjaUJpZFhOMGIzTWdZMmhwZG1sc1kyOTVLZ1FJQXhBQWtnRVFZWFYwYjE5eVpYQmhhWEpmYzJodmNLb0JYd29KTDIwdk1ESTJlbk5mRUFFcUVTSU5kR0ZzYkdWeUlHSjFjM1J2Y3lnT01pQVFBU0ljeHRLYUZ1WkQ0ZzRXUE1KaXVHdElVb2VXOG5rSjJ1amZuTFJTcXpJYkVBSWlGM1JoYkd4bGNpQmlkWE4wYjNNZ1kyaHBkbWxzWTI5NZIBJAoNL2cvMTFzd19yZjhxNAoNL2cvMTFmcThucnIzeBIECgIIAQ%3D%3D&src=2&spp=Cg0vZy8xMXN3X3JmOHE0OtwBV2lrUUFCQUJHQUFZQVJnQ0loZDBZV3hzWlhJZ1luVnpkRzl6SUdOb2FYWnBiR052ZVNvRUNBTVFBSklCRUdGMWRHOWZjbVZ3WVdseVgzTm9iM0NhQVFDcUFWOEtDUzl0THpBeU5ucHpYeEFCS2hFaURYUmhiR3hsY2lCaWRYTjBiM01vRGpJZ0VBRWlITWJTbWhibVEtSU9GanpDWXJoclNGS0hsdko1Q2RybzM1eTBVcXN5R3hBQ0loZDBZV3hzWlhJZ1luVnpkRzl6SUdOb2FYWnBiR052ZVE9PQ%3D%3D&serdesk=1&lrlstt=1692390041858&ved=2ahUKEwjQ7NmUhOeAAxXGl5UCHUO6AugQvS56BAgaEAE&scp=ChVnY2lkOmF1dG9fcmVwYWlyX3Nob3ASUhISCZPd5dwwpb6VEXdLb6AgOuZaIiRDaGl2aWxjb3ksIFByb3ZpbmNpYSBkZSBCdWVub3MgQWlyZXMqFA0txCzrFe1nLtwdHY876yVST0PcMAEaDXRhbGxlciBidXN0b3MiF3RhbGxlciBidXN0b3MgY2hpdmlsY295Kh5UYWxsZXIgZGUgcmVwYXJhY2nDs24gZGUgYXV0b3M%3D", "_blank")
                }></i>
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
