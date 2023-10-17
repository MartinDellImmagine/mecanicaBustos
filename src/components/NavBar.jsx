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
        <nav>
            <ul>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/repuestos'>Repuestos</a></li>
                <li><a href='/turnos'>Agenda tu turno</a></li>
                {
                    user ? user.email === "test@test.com" ?  <li><a href='/admin'>Panel Administracion</a></li> : console.log('') : null
                }
                {
                    user ? <li><a href="/" onClick={handleLogout}>Cerrar Sesion</a> </li> : <li><a href='/login'>Login</a></li>
                }
            </ul>
        </nav>
    );
}

export default NavBar;
